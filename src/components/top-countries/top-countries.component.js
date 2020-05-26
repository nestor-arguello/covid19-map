import React from 'react';

import './top-countries.styles.scss';

import TopCategory from '../top-category/top-category.component';
import { useStoreValue } from '../../store';
import setTopCategoriesList from './setTopCategoriesList';

const TopCountries = ({ ...props }) => {
  const {
    state: { lastUpdate, countries } = {},
  } = useStoreValue();

  const topCategoryList = setTopCategoriesList(countries);

  return (
    <div className="top-countries">
      <h3 className="title">Most Affected Countries*</h3>

      <span className="updated-date">
        {lastUpdate ? `Last update: ${lastUpdate}` : null}
      </span>

      {topCategoryList.map(category => (
        <TopCategory
          key={category.title}
          title={category.title}
          countriesNames={category.countriesNames}
          seriesData={category.seriesData}
        />
      ))}

      <span className="sources-names">
        <em>*</em> Data from Johns Hopkins University, the New York Times,
        Worldometers and Apple reports.
      </span>
    </div>
  );
};

export default TopCountries;
