import React from 'react';
import CovidMap from '../components/covid-map/covid-map.component'

import './index.styles.scss';

import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Covid-19 Status Map' />
      
      <div className="map-container">
        <CovidMap />
      </div>
      
      <div>Dashboard</div>
    </Layout>
  );
};

export default IndexPage;