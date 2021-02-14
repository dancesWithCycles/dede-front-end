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

import L from 'leaflet';
import dedeMarker from '../images/dedeLogo0032.png';
import carMarker from '../images/car.svg';
import busMarker from '../images/bus.svg';
import trainMarker from '../images/train.svg';
import tramMarker from '../images/tram.svg';
import taxiMarker from '../images/taxi.svg';
import ParcelServiceMarker from '../images/parcelservice.svg';
import DeliveryServiceMarker from '../images/deliveryservice.svg';
// TODO remove old
import GetVehicleName from './getVehicleName';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png')
});

// TODO remove old
const GetVehicleIconOld=(vehicle)=>{
    return GetVehicleName(vehicle)==='Bus'?busMarker:
	GetVehicleName(vehicle)==='Auto'?carMarker:
	GetVehicleName(vehicle)==='Zug'?trainMarker:
	GetVehicleName(vehicle)==='Tram'?tramMarker:
	GetVehicleName(vehicle)==='Taxi'?taxiMarker:
	GetVehicleName(vehicle)==='Paketdienst'?ParcelServiceMarker:
	GetVehicleName(vehicle)==='Lieferservice'?DeliveryServiceMarker:
	dedeMarker;
}

const GetVehicleIcon=(vehicle)=>{
    return vehicle==='0'?busMarker:
	vehicle==='1'?carMarker:
	vehicle==='2'?trainMarker:
	vehicle==='3'?tramMarker:
	vehicle==='4'?taxiMarker:
	vehicle==='5'?ParcelServiceMarker:
	vehicle==='6'?DeliveryServiceMarker:
	dedeMarker;
}

export default GetVehicleIcon;
