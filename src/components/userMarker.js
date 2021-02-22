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

const UserMarker=(props)=>{
    const {position}=props;
    return(
        <Marker
        key="user-icon"
        position={position}
        icon={UserIcon()}
    >
        <UserPopup position={position}/>
</Marker>
);
    // if(position){
    //     console.log('UserMarker: lat: '+position.coords.latitude +',lon: '+position.coords.longitude);
    //     return(
    //         <>
    //             <Marker
    //                 key='user-icon'
    //                 position={[position.coords.latitude,position.coords.longitude]}
    //                 icon={UserIcon()}
    //             >
    //             </Marker>
    //         </>
    //     );
    // }else{
    //     return null;
    // }
}
export default UserMarker;
