import React from 'react';
import { Helmet } from 'react-helmet';
import useMap from '../../hooks/useMap';

import './covid-map.styles.scss';

const CovidMap = ({ countries = [] }) => {
  useMap({ mapId: 'map', countries });

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
