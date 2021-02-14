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

import GetVehicleIcon from './getVehicleIcon';
import L from 'leaflet';

const GetLocationIcon=(location)=>{
    return new L.Icon({
	iconUrl:GetVehicleIcon(location.vehicle),
	iconSize:[32,32],
	popupAnchor:[0,-8]
    });
}
export default GetLocationIcon;
