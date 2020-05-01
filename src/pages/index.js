import React, { useState } from 'react';
import Map from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import { MAPBOX_ACCESS_TOKEN } from '../constants';

import './styles.scss';

const IndexPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 0,
  });

  return (
    <Layout>
      <SEO title='Covid-19 Status Map' />
      <Map
        style={{ width: '100%', height: '400px' }}
        mapStyle='mapbox://styles/narguello/ck9kximbd27xc1ioj39b7shr0'
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      />
    </Layout>
  );
};

export default IndexPage;
