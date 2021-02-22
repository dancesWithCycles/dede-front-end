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

import userIcon from '../images/user.svg';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl:require('leaflet/dist/images/marker-icon.png'),
    shadowUrl:require('leaflet/dist/images/marker-shadow.png')
});

// react function component returning new vehicle icon
 const UserIcon=()=>new L.Icon({
  // path to graphic used for high resolution monitors
  iconRetinaUrl:userIcon,
  // path to icon graphic
  iconUrl:userIcon,
  // size of the icon in width and hight
  iconSize: [32,32],
  // determine how the popup is positions relative to the actual point on the map
  popupAnchor: [0, -10],
  // determine how the image is positions relative to the actual point on the map
  iconAnchor: null,
  // path to shadow graphic
  shadowUrl: null,
  // size of the shadow in width and hight
  shadowSize: null,
  // determine how the mage is positions relative to the actual point on the map
  shadowAnchor: null,
  className: 'leaflet-user-icon'
})

export default UserIcon;
