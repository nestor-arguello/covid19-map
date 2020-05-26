import React from 'react';
import loadable from '@loadable/component';
// import Chart from 'react-apexcharts';

import './top-category.styles.scss';

import setChartData from './setChartData';

const Chart = loadable(() => import('react-apexcharts'));

const TopCategory = ({ title, countriesNames, seriesData, ...props }) => {
  const { options, series } = setChartData({
    categories: countriesNames,
    series: seriesData,
  });

  return (
    <div className="top-category">
      <h4 className="category-title">{title}</h4>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="360"
      />
    </div>
  );
};

export default TopCategory;
