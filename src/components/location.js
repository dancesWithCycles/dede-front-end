import React from 'react';
import  {Marker,Popup} from 'react-leaflet';
// TODO Is CSS import required?
import 'leaflet/dist/leaflet.css';
import GetLocationIcon from './getLocationIcon';
import GetVehicleName from './getVehicleName';
import GetAlias from './getAlias';
import { FormattedMessage } from 'react-intl';

const Location=(props)=>{
	return(
		<>
		<Marker key={props.location.uuid}
		icon={GetLocationIcon(props.location)}
		position={[props.location.lat,props.location.lon]}>
		<Popup>
		<p>
		<FormattedMessage id="Location.alias"/>: {GetAlias(props.location.alias)}<br/>
		<FormattedMessage id="Location.vehicle"/>: {GetVehicleName(props.location.vehicle)}<br/>
		<FormattedMessage id="Location.latitude"/>: {props.location.lat}<br/>
		<FormattedMessage id="Location.longitude"/>: {props.location.lon}<br/>
		<FormattedMessage id="Location.time.gps"/>: {props.location.ts}<br/>
		<FormattedMessage id="Location.time.system"/>: {Date.now()}<br/>
		<FormattedMessage id="Location.age"/>: {Date.now()-props.location.ts} ms<br/>
		</p>
		</Popup>
		</Marker>
		</>
	);
}
export default Location;
