import {
  MAPBOX_ACCESS_TOKEN,
  USER_NAME,
  CUSTOM_STYLE_ID,
  ATTRIBUTION,
} from '../../constants';

import { setMapLoaded } from '../../actions';

const L = typeof window !== `undefined` ? require('leaflet') : null;

const createMap = ({ mapId, mapRef, dispatch }) => {
  const initialViewport = {
    lat: 0,
    lng: 0,
    zoom: 3,
  };
  const position = [initialViewport.lat, initialViewport.lng];

  const southWest = L.latLng(-89.98155760646617, -180);
  const northEast = L.latLng(89.99346179538875, 191);
  const bounds = L.latLngBounds(southWest, northEast);

  const map = L.map(mapId).setView(position, initialViewport.zoom);

  L.tileLayer(
    `https://api.mapbox.com/styles/v1/${USER_NAME}/${CUSTOM_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`,
    {
      tileSize: 512,
      zoomOffset: -1,
      attribution: ATTRIBUTION,
      minZoom: 3,
    }
  )
    .on(
      'load',
      function loadMap() {
        dispatch(setMapLoaded(true));
        this.off('load');
      },
      this
    )
    .on(
      'tileerror',
      function alertMapError() {
        alert(
          'Communication error loading the map. Please refresh the page in a few minutes'
        );
        this.off('tileerror');
      },
      this
    )
    .addTo(map);

  map.setMaxBounds(bounds);

  map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: false });
  });

  mapRef.current = map;
};

export default createMap;
