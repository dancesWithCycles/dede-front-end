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

import dedeIcon from '../images/dedeLogo0032.png';
import carIcon from '../images/car.svg';
import busIcon from '../images/bus.svg';
import trainIcon from '../images/train.svg';
import tramIcon from '../images/tram.svg';
import taxiIcon from '../images/taxi.svg';
import ParcelServiceIcon from '../images/parcelservice.svg';
import DeliveryServiceIcon from '../images/deliveryservice.svg';

const VehicleCode=(vehicle)=>{
    return vehicle==='0'?busIcon:
	vehicle==='1'?carIcon:
	vehicle==='2'?trainIcon:
	vehicle==='3'?tramIcon:
	vehicle==='4'?taxiIcon:
	vehicle==='5'?ParcelServiceIcon:
	vehicle==='6'?DeliveryServiceIcon:
	vehicle?dedeIcon:
	dedeIcon;
};

export default VehicleCode;
