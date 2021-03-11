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

import React from 'react';
import VehicleIcon from './vehicleIcon';
import VehiclePopup from './vehiclePopup';
import {CircleMarker} from 'react-leaflet';

const VehicleRealTimeMarker=(props)=>{
    const {location}=props;
    //TODO improve availability of age property
    const age=120000;
    let sysTs=Date.now();
    let diff=sysTs-location.ts;
    if(diff<age){
	return(
		<>
		<CircleMarker
	    color='#3F00FF'
            opacity={1}
            radius={10}
            weight={1}
            center={[location.lat,location.lon]}
	    key={location.uuid}
		>
		<VehiclePopup location={location}/>
	    </CircleMarker>
	    </>
	);
    }else{
	return null;
    }
}
export default VehicleRealTimeMarker;

