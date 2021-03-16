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
import React, {useEffect, useState} from 'react';
import Map from './map';
//send HTTP GET
import axios from 'axios';

const Home=()=>
{
    const [vehicles, setVehicles]=useState([]);

    //load vehicles from db
    useEffect(()=>{
        // setting interval: similar to ComponentDidMount
        const timer=setInterval(()=>{
            axios.get('https://dedriver.org/xpress')
            .then(response => {
                if(response.data){
                    // setting vehicles
                    setVehicles(response.data);
                }else{
		    console.log('GET request without response')
		}
            })
            .catch(function (error) {
                console.log(error);
            })
	    //TODO improve availability of interval property
        },5000);
        // clearing interval: similar to ComponentWillUnmount
        return ()=>clearInterval(timer);
    });

    return (
	    <Map
	vehicles={vehicles}
	    />
    );
}
export default Home;

