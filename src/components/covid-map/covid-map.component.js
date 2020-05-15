/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Helmet } from 'react-helmet';

import './covid-map.styles.scss';

import useMap from '../../hooks/useMap';
import { useStoreValue } from '../../store';

const CovidMap = ({ ...props }) => {
  const {
    state: { countries, mapRef, selectedCountryCoord },
    dispatch,
  } = useStoreValue();

  useMap({ mapId: 'map', selectedCountryCoord, countries, dispatch });

  console.log(
    'map: ',
    mapRef,
    'countries: ',
    countries,
    'selectedCountryCoord: ',
    selectedCountryCoord
  );

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

      <div id="map" />
    </>
  );
};

export default CovidMap;
