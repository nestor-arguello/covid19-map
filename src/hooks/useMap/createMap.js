import L from 'leaflet';

import {
  MAPBOX_ACCESS_TOKEN,
  USER_NAME,
  CUSTOM_STYLE_ID,
  ATTRIBUTION,
} from '../../constants';

const createMap = ({ mapId, mapRef }) => {
  const initialViewport = {
    lat: 0,
    lng: 0,
    zoom: 2,
  };
  const position = [initialViewport.lat, initialViewport.lng];

  const map = L.map(mapId).setView(position, initialViewport.zoom);

  L.tileLayer(
    `https://api.mapbox.com/styles/v1/${USER_NAME}/${CUSTOM_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`,
    {
      tileSize: 512,
      zoomOffset: -1,
      attribution: ATTRIBUTION,
      minZoom: 2,
    }
  ).addTo(map);

  mapRef.current = map;
};

export default createMap;