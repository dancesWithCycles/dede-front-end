/*
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

import React, {useEffect, useState, useMemo} from 'react';
// map is invisible without the following CSS
import './map.css';
import  {MapContainer, TileLayer, LayersControl} from 'react-leaflet';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
//send HTTP GET
import axios from 'axios';
import VehicleMarker from '../components/vehicleMarker';
import UserMarker from '../components/userMarker';
import UserPosition from '../components/userPosition';
import {ThunderForests} from '../components/thunderForests';
import TBaseLayer from '../components/tBaseLayer';
import { latLngBounds } from "leaflet";

export const INITIAL_LOCATION = [0,0];

const Map=()=>
{
    const [locations, setLocations]=useState([]);

    const [selection, setSelection]=useState(null);

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

    const pos=UserPosition();

    const currentUserLocation=()=>{
        if(pos){
            return [pos.coords.latitude,pos.coords.longitude];
        }else{
	    // return initial map location
            return INITIAL_LOCATION;
        }
    };

    const southWest = L.latLng(40.712, -74.227)
    const northEast = L.latLng(40.774, -74.125)
    const bounds = latLngBounds(southWest, northEast)


    const allLocationBounds = useMemo(() => {

	//TODO latLngBounds() as init fails maybe due to empty array
	//TODO Error: Bounds are not valid
	//const bounds=latLngBounds()
	const bounds = latLngBounds(southWest, northEast)
	//sites.forEach((site) => bounds.extend(site.position));
	locations.forEach((location)=>{
	    const position=[location.lat, location.lon]
	    //console.log('position: '+position)
	    bounds.extend(position)
	})
	return bounds.pad(0.1)
    }, [locations]);

    const handleSelection=(location)=>{
	console.log('handleSelection: location: '+location.lat+', '+location.lon)
	setSelection(location);
    };

    return(

        <MapContainer
        // map is invisible without center attribute
        //TODO center={currentUserLocation()}
	center={selection && [selection.lat, selection.lon]}
	bounds={!selection && allLocationBounds}
        // map is invisible without zoom attribute
        zoom={1}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}>
                
	    <LayersControl>

	    <LayersControl.BaseLayer name="OSM Standard" checked>
            <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
	    />
	    </LayersControl.BaseLayer>

        {ThunderForests.map(function(o) {
	    const {name, url, attribution, ...tileParams}=o;
	    return <TBaseLayer key={o.key} name={name} url={url} attribution={attribution} tileParams={tileParams}/>;
        })}

	</LayersControl>
        
            {locations.map(function(o) {
                return <VehicleMarker key={o.uuid} location={o} eventHandlers={{click: ()=>handleSelection(o)}}/>;
                })
            }

            <UserMarker position={currentUserLocation()}/>

        </MapContainer>

        ); 
}
export default Map;

