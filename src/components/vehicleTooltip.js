import React from 'react';
import VehicleName from './vehicleName';
import VehicleAlias from './vehicleAlias';
import { FormattedMessage } from 'react-intl';

const vehicleTooltip=(props)=>{
    const {vehicle}=props;

    return vehicle ? (
	    <div>
	    <FormattedMessage id="Location.alias"/>: {VehicleAlias(vehicle.alias)}<br/>
	    <FormattedMessage id="Location.vehicle"/>: {VehicleName(vehicle.vehicle)}<br/>
	</div>

    ):("");
}
export default vehicleTooltip;

