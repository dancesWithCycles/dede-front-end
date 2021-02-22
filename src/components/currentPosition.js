import {useEffect, useState} from 'react';

const CurrentPosition=()=>
{
    const [pos, setPos]=useState(null);

    useEffect(()=>{
        // setting interval: similar to ComponentDidMount
        const timer=setInterval(()=>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success,error,options);
            }
        },1000);
        // clearing interval: similar to ComponentWillUnmount
        return ()=>clearInterval(timer);
    });

    const options={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    };
    
    const error=(err)=>{
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    const success=(position)=>{
        setPos(position);
    }
    
    return pos;
}

export default CurrentPosition;