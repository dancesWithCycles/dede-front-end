/*
Front end for Dede passenger information system at dedriver.org
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React, {useEffect, useState} from 'react';
// map is invisible without the following CSS
import './map.css';
import  {MapContainer,TileLayer} from 'react-leaflet';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
//send HTTP GET
import axios from 'axios';
import RealTimeVehicle from '../components/realTimeVehicle';
import CurrentPosition from '../components/currentPosition';
import InitialMapCenter from '../assets/initialMapCenter';

const Map=()=>
{
    const [locations, setLocations]=useState([]);

    useEffect(()=>{
        // setting interval: similar to ComponentDidMount
        const timer=setInterval(()=>{
            axios.get('https://dedriver.org/xpress')
            .then(response => {
                if(response.data){
                    // setting locations
                    setLocations(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        },500);
        // clearing interval: similar to ComponentWillUnmount
        return ()=>clearInterval(timer);
    });

    const curPos=()=>{
        const pos=CurrentPosition();
        if(pos){
            console.log('curPos: lat: '+pos.coords.latitude +',lon: '+pos.coords.longitude);
            return [pos.coords.latitude,pos.coords.longitude];
        }else{
             return InitialMapCenter.initialMapCenter;
        }
    };

    return(
        <MapContainer
        // map is invisible without center attribute
        center={curPos()}
        // map is invisible without zoom attribute
        zoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}>
                
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
        
            {locations.map(function(o) {
                return <RealTimeVehicle key={o.uuid} location={o}/>;
                })
            }

        </MapContainer>
        ); 
}
export default Map;