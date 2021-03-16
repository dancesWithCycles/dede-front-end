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

import React, {useEffect, useState} from 'react';
// map is invisible without the following CSS
import './map.css';
import  {MapContainer, TileLayer, LayersControl} from 'react-leaflet';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
//send HTTP GET
import axios from 'axios';
import VehicleMarker from '../components/vehicleMarker';
import UserMarker from '../components/userMarker';
import UserPosition from '../components/userPosition';
import {ThunderForests} from '../components/thunderForests';
import TBaseLayer from '../components/tBaseLayer';
import MarkerClusterGroup from 'react-leaflet-markercluster';

export const INITIAL_LOCATION = [0,0];

const Map=()=>
{
    const [locations, setLocations]=useState([]);

    //load vehicles from db
    useEffect(()=>{
        // setting interval: similar to ComponentDidMount
        const timer=setInterval(()=>{
            axios.get('https://dedriver.org/xpress')
            .then(response => {
                if(response.data){
                    // setting locations
                    setLocations(response.data);
                }else{
		    console.log('GET request without response')
		}
            })
            .catch(function (error) {
                console.log(error);
            })
        },5000);
        // clearing interval: similar to ComponentWillUnmount
        return ()=>clearInterval(timer);
    });

    const pos=UserPosition();

    const currentUserLocation=()=>{
        if(pos){
	    return [pos.coords.latitude,pos.coords.longitude];
	}else{
	    // return initial map location until user location is available
            return INITIAL_LOCATION;
        }
    };

    // include locaation only if it has id, lat, lon, ... TODO
    const filteredLocations = locations.filter(
	(location) =>
	location.uuid &&
	location.lat &&
	location.lon
    );

    // Function for creating custom icon for cluster group
    // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
    // NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
    // eslint-disable-next-line
    const createClusterCustomIcon = function (cluster) {
	return L.divIcon({
	    html: '<div><span>'+cluster.getChildCount()+'</span></div>',
	    //html: \`<span>\${cluster.getChildCount()}</span>\`,
	    className: 'marker-cluster-custom',
	    iconSize: L.point(40, 40, true),
	});
    };

    return(

        <MapContainer
        // map is invisible without center attribute
        center={currentUserLocation()}
        // map is invisible without zoom attribute
        zoom={2}
	minZoom={2}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
	//drag map with mouse or touch
        dragging={true}
	//reset view completely without animation
        animate={false}
	//update view when idle
	updateWhenIdle={true}
	//update view when idle
	updateWhenZooming={false}
	//render Paths on a Canvas Renderer instead of SVG
	preferCanvas={true}>
                
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

	    <MarkerClusterGroup
	showCoverageOnHover={false}
	iconCreateFunction={createClusterCustomIcon}>
            {filteredLocations.map(function(o) {
                return <VehicleMarker key={o.uuid} location={o}/>;
                })
            }
	</MarkerClusterGroup>

            <UserMarker
	position={currentUserLocation()}/>

        </MapContainer>

        ); 
}
export default Map;

