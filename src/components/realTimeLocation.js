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
import Location from './location';

const RealTimeLocation=(props)=>{
	const loc=props.location;
	//TODO improve availability of age property
	const age=60000;
	let sysTs=Date.now();
	// console.log('sysTs:'+sysTs);
	let locTs=loc.ts;
	// console.log('locTs:'+locTs);
	let diff=sysTs-loc.ts;
	// console.log('diff:'+diff);
	if(diff<age){
		// console.log('rt uuid:'+loc.uuid);
		return <Location uuid={loc.uuid} location={loc}/>;
	}else{
		// console.log('no rt');
		return null;
	}
}
export default RealTimeLocation;
