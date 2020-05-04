import React, { useState, useEffect } from 'react';
import fetchCountries from '../utility/fetchCountries';

import './index.styles.scss';

import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import CovidMap from '../components/covid-map/covid-map.component';

const IndexPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(setCountries)
  }, [])

  return (
    <Layout>
      <SEO title='Covid-19 Status Map' />

      <div className='map-container'>
        <CovidMap countries={countries} />
      </div>

      <div>Dashboard</div>
    </Layout>
  );
};

export default IndexPage;
