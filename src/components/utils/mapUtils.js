export const attribution=
    '&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors'

export const tileUrl=
'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

export const defaultMapState = {
  lat:0,
  lng:0,
  zoom: 2,
  minZoom: 2,
}

//TODO: Study and evaluate!
/*
export function getMarkerColor(m) {
  if (m.isEpic) {
    return "#F78D1E";
  } else if (m.isIkon) {
    return "#F7CB14";
  } else {
    return "white";
  }
}
*/
