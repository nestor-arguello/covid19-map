import React from 'react';

import { StoreProvider } from '../store';

import './index.styles.scss';

import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import CovidMap from '../components/covid-map/covid-map.component';

const IndexPage = () => {
  return (
    <StoreProvider>
      <Layout>
        <SEO title="Covid-19 Status Map" />

        <div className="map-container">
          <CovidMap />
        </div>

        {/* <div>Dashboard</div> */}
      </Layout>
    </StoreProvider>
  );
};

export default IndexPage;
