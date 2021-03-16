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

import React, {useState} from 'react';
// map is invisible without the following CSS
import './map.css';
import  {
    MapContainer,
    TileLayer,
    LayersControl,
    CircleMarker,
    Popup
} from 'react-leaflet';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
//send HTTP GET
import axios from 'axios';
import UserMarker from '../components/userMarker';
import UserPosition from '../components/userPosition';
import {ThunderForests} from '../components/thunderForests';
import TBaseLayer from '../components/tBaseLayer';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import {
  attribution,
  tileUrl,
  defaultMapState,
} from '../components/utils/mapUtils';
import VehicleTooltip from '../components/vehicleTooltip';

export const INITIAL_LOCATION = [0,0];

const Map=(props)=>
      {
	  const [activeVehicle, setActiveVehicle]=useState(null);
	  const state=defaultMapState;
	  const {vehicles}=props;
	  const pos=UserPosition();

	  const currentUserLocation=()=>{
              if(pos){
		  return [pos.coords.latitude,pos.coords.longitude];
	      }else{
		  // return initial map location until user location is available
		  //TODO: Cleanup!
		  return INITIAL_LOCATION;
		  //return [state.lat,state.lon];
              }
	  };


	  // include location only if it has id, lat, lon, ... TODO: To be continued!
	  const filteredVehicles = vehicles.filter(
	      (vehicle) =>
	      vehicle.uuid &&
	      vehicle.lat &&
	      vehicle.lon
	  );

	  const closePopup=()=>{
	      setActiveVehicle(null)
	  };

	  const handleActiveVehicle=(vehicle)=>{
	      setActiveVehicle(vehicle);
	  };

	  // Function for creating custom icon for cluster group
    // https://github.com/Leaflet/Leaflet.markercluster#customising-the-clustered-markers
    // NOTE: iconCreateFunction is running by leaflet, which is not support ES6 arrow func syntax
    // eslint-disable-next-line
    const createClusterCustomIcon = function (cluster) {
	return L.divIcon({
	    html: '<div><span>'+cluster.getChildCount()+'</span></div>',
	    className: 'marker-cluster-custom',
	    iconSize: L.point(40, 40, true),
	});
    };

    return vehicles ? (

        <MapContainer
        // map is invisible without center attribute
        center={currentUserLocation()}
        // map is invisible without zoom attribute
        zoom={state.zoom}
	minZoom={state.minZoom}
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
        url={tileUrl}
        attribution={attribution}
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
	{filteredVehicles.map((vehicle,id)=>
				  <CircleMarker
				  key={vehicle.uuid}
				  //disable boarder on circles
				  stroke={false}
				  fillColor='#3F00FF'
				  fillOpacity={1}
				  radius={9}
				  eventHandlers={{click: ()=>handleActiveVehicle(vehicle)}}
				  center={[vehicle.lat,vehicle.lon]}/>
				 )}
	</MarkerClusterGroup>

	{activeVehicle && <Popup
	 key={activeVehicle.uuid}
	 position={[
	     activeVehicle.lat,
	     activeVehicle.lon
	 ]}
	 onClose={()=>closePopup()}
	 >
	 <VehicleTooltip
         vehicle={activeVehicle}
	 />
	 </Popup>
	}

            <UserMarker
	position={currentUserLocation()}/>

        </MapContainer>
    ):(
	//TODO: add intl'ization!
	"Data is loading..."
    );
}
export default Map;

