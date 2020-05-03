import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import './covid-map.styles.scss';

import {
  MAPBOX_ACCESS_TOKEN,
  USER_NAME,
  CUSTOM_STYLE_ID,
  ATTRIBUTION,
  COVID_API_URL,
} from '../../constants';

const CovidMap = ({ ...props }) => {
  const [viewport, setViewport] = useState({
    lat: 0,
    lng: 0,
    zoom: 2,
  });
  const position = [viewport.lat, viewport.lng];

  useEffect(() => {
    const map = L.map('map').setView(position, viewport.zoom);

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/${USER_NAME}/${CUSTOM_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`,
      {
        tileSize: 512,
        zoomOffset: -1,
        attribution: ATTRIBUTION,
        minZoom: 2,
      }
    ).addTo(map);
  }, []);

  const getCountries = async () => {
    try {
      const response = await axios.get(COVID_API_URL);

      const { data = [] } = response;

      const hasData = Array.isArray(data) && data.length;

      if (!hasData) return;

      const geojson = {
        type: 'FeatureCollection',
        features: data.map(country => {
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
      console.log(geojson);
    } catch (error) {
      console.log('Failed API request', error.message);
      return;
    }
  };

  useEffect(() => {
    getCountries();
  });

  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
          integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
          crossorigin=''
        />
      </Helmet>

      <div id='map' />
    </>
  );
};

export default CovidMap;
