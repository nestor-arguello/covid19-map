import { useEffect, useRef } from 'react';
import L from 'leaflet';

import {
  MAPBOX_ACCESS_TOKEN,
  USER_NAME,
  CUSTOM_STYLE_ID,
  ATTRIBUTION,
} from '../constants';

const initialViewport = {
  lat: 0,
  lng: 0,
  zoom: 2,
};

const useMap = ({ mapId, countries }) => {
  const mapRef = useRef(null);

  const position = [initialViewport.lat, initialViewport.lng];

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (countries.length) {
      const geojson = {
        type: 'FeatureCollection',
        features: countries.map(country => {
          const { countryInfo: { lat, long: lng, flag } = {} } = country;
          return {
            type: 'Feature',
            properties: {
              flag,
              ...country,
            },
            geometry: {
              type: 'Point',
              coordinates: [lng, lat],
            },
          };
        }),
      };

      L.geoJSON(geojson).addTo(mapRef.current);
    }
  }, [countries]);
};

export default useMap;
