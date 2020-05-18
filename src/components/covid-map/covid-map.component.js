/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Helmet } from 'react-helmet';

import './covid-map.styles.scss';

import useMap from '../../hooks/useMap';
import { useStoreValue } from '../../store';

const CovidMap = ({ ...props }) => {
  const {
    state: { countries, selectedCountryCoord, mapLoaded },
    dispatch,
  } = useStoreValue();

  useMap({ mapId: 'map', selectedCountryCoord, countries, dispatch });

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Helmet>

      <div id="map">
        <div className={`map-backdrop ${mapLoaded ? 'hide' : ''}`}>
          <h4 className="map-backdrop-msg">Loading map...</h4>
        </div>
      </div>
    </>
  );
};

export default CovidMap;
