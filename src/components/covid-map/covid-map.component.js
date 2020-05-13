import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import useMap from '../../hooks/useMap';
import { CountriesContext } from '../../contexts/CountriesProvider';

import './covid-map.styles.scss';

const CovidMap = ({ ...props }) => {
  const countries = useContext(CountriesContext);
  useMap({ mapId: 'map', countries });
  console.log(countries);

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
