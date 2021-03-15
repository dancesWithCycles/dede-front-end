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

import React from 'react';
import UserIcon from './userIcon';
import {Marker} from 'react-leaflet';
import UserPopup from './userPopup';
import {INITIAL_LOCATION} from '../pages/map';

const UserMarker=(props)=>{
    const {position}=props;
    //console.log('UserMarker: position: lat: '+position[0] +',lon: '+position[1]);
    if(!position===INITIAL_LOCATION){
	return(
		<Marker
            key="user-icon"
            position={position}
            icon={UserIcon()}>
		<UserPopup position={position}/>
	    </Marker>
	);
    }else{
	//console.log('no location, no user marker')
	return null;
    }
}
export default UserMarker;

