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

const VehicleRoute=(tripShortName)=>{

    const getMsgs=(query)=>{
	axios.get(query)
	    .then(response => {
		if(response.data){
		    const DATA=response.data;
		    console.log('DATA: '+DATA);
		    return DATA;
		}
            })
            .catch(function (error) {
		console.log('error.message: '+error.message);
		return [];
            });
    };

    console.log('tripShortName: '+tripShortName);

    const QUERY=`http://localhost:65534/route-short-name?tripshortname=${tripShortName}`;
    console.log('QUERY: '+QUERY);

    const RES = getMsgs(QUERY);
    console.log('RES: '+RES);

    const RSN=RES[0].route_short_name;
    console.log('RSN: '+RSN);

    return RSN==='error'?tripShortName:
	RSN;
}
export default VehicleRoute;
