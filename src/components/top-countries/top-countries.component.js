import React from 'react';

import './top-countries.styles.scss';

import TopCategory from '../top-category/top-category.component';
import { useStoreValue } from '../../store';
import getTopCases from './getTopCases';

const TopCountries = ({ ...props }) => {
  const {
    state: { lastUpdate, countries },
  } = useStoreValue();

  const topCasesEurope = getTopCases({
    countries,
    continent: 'Europe',
    topNumber: 5,
    seriesTopics: [
      {
        title: 'Confirmed',
        propName: 'cases', 
      },
      {
        title: 'Recovered',
        propName: 'recovered', 
      },
      {
        title: 'Deaths',
        propName: 'deaths', 
      },
    ]
  })  

  return (
    <div className="top-countries">
      <h3 className="title">Most Affected Countries*</h3>

      <span className="updated-date">
        {lastUpdate ? `Last update: ${lastUpdate}` : null}
      </span>
      {console.log(topCasesEurope)}
      
      <TopCategory 
        title="Europe" 
        countriesNames={topCasesEurope.countriesNames}
        seriesData={topCasesEurope.seriesData}
      />

      <span className="sources-names">
        <em>*</em> Data from Johns Hopkins University, the New York Times,
        Worldometers and Apple reports.
      </span>
    </div>
  );
};

export default TopCountries;
