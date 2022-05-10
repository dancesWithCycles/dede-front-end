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

import axios from 'axios';

const VehicleCompany=(company)=>{
    console.log('company: '+company);

    const QUERY=`http://localhost:65534/agency-name?routeid=${47189}`;

    /*TODO make route available using config*/
    /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
    const res = await axios.get('https://soll.vbn.de/gtfs/routes-all');
    return company==='0'?intl.formatMessage({ id: 'Company.bus' }):
	company==='1'?intl.formatMessage({ id: 'Company.car' }):
	company==='2'?intl.formatMessage({ id: 'Company.train' }):
	company==='3'?intl.formatMessage({ id: 'Company.tram' }):
	company==='4'?intl.formatMessage({ id: 'Company.taxi' }):
	company==='5'?intl.formatMessage({ id: 'Company.parcelservice' }):
	company==='6'?intl.formatMessage({ id: 'Company.deliveryservice' }):
	company?intl.formatMessage({ id: 'Company.nomatch' }):
	intl.formatMessage({ id: 'Company.nomatch' });
}
export default VehicleCompany;
