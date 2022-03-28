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
import {Popup} from 'react-leaflet';
import VehicleName from './vehicleName';
import VehicleAlias from './vehicleAlias';
import { FormattedMessage } from 'react-intl';
import seconds2dmhs from './seconds2dhms';

const VehiclePopup = (props) => {
    const { location,onClose } = props;
    const route=location.routeId?location.routeId:
	  <FormattedMessage id="Location.unknown"/>;
    const trip=location.tripId?location.tripId:
	  <FormattedMessage id="Location.unknown"/>;
    const company=location.company?location.company:
	  <FormattedMessage id="Location.unknown"/>;
    const label=location.label?location.label:
	  <FormattedMessage id="Location.unknown"/>;
    const age=((Date.now()-location.ts)/1000).toFixed(0)
    const sec2dhms=seconds2dmhs(Math.round(age))
  return  (
    <Popup
      key={location.uuid}
      position={[
	  location.lat,
	  location.lon
      ]}
      onClose={onClose}
      >
      <div>
	  <FormattedMessage id="Location.alias"/>: {VehicleAlias(location.alias)}<br/>
	  <FormattedMessage id="Location.company"/>: {company}<br/>
	  <FormattedMessage id="Location.route"/>: {route}<br/>
	  Trip: {trip}<br/>
	  Label: {label}<br/>
	  <FormattedMessage id="Location.vehicle"/>: {VehicleName(location.vehicle)}<br/>
	  <FormattedMessage id="Location.age"/>: {sec2dhms}<br/>
      </div>
    </Popup>
    );
};

export default VehiclePopup;

