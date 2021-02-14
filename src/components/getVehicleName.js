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

import { useIntl } from 'react-intl';

const GetVehicleName=(vehicle)=>{
	const intl=useIntl();	
    return vehicle==='0'?intl.formatMessage({ id: 'Vehicle.bus' }):
	vehicle==='1'?intl.formatMessage({ id: 'Vehicle.car' }):
	vehicle==='2'?intl.formatMessage({ id: 'Vehicle.train' }):
	vehicle==='3'?intl.formatMessage({ id: 'Vehicle.tram' }):
	vehicle==='4'?intl.formatMessage({ id: 'Vehicle.taxi' }):
	vehicle==='5'?intl.formatMessage({ id: 'Vehicle.parcelservice' }):
	vehicle==='6'?intl.formatMessage({ id: 'Vehicle.deliveryservice' }):
	intl.formatMessage({ id: 'Vehicle.nomatch' });
}
export default GetVehicleName;
