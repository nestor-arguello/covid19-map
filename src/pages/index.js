import React from 'react';

import './index.styles.scss';

import CountriesProvider from '../contexts/CountriesProvider'
import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import CovidMap from '../components/covid-map/covid-map.component';


const IndexPage = () => {
  return (
    <CountriesProvider>
      <Layout>
        <SEO title="Covid-19 Status Map" />

        <div className="map-container">
          <CovidMap />
        </div>

        {/* <div>Dashboard</div> */}
      </Layout>
    </CountriesProvider>
  );
};

export default IndexPage;
