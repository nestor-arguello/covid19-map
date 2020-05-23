import React, { useState } from 'react';
import Chart from 'react-apexcharts';

import './top-category.styles.scss';

const TopCategory = ({ ...props }) => {
  const [state, setState] = useState({
    series: [
      {
        data: [44, 55, 41, 64, 22],
      },
      {
        data: [53, 32, 33, 52, 13],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 430,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      legend: {
        position: 'top',
        fontFamily: 'Fira Sans, sans-serif',
        labels: {
          colors: ['#fff', '#fff'],
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 18,
        style: {
          fontSize: '12px',
          fontFamily: 'Fira Sans, sans-serif',
          colors: ['#fff'],
        },
      },
      tooltip: {
        style: {
          fontFamily: 'Fira Sans, sans-serif',
          fontSize: '12px',
        },
        theme: 'dark',
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#1c1341'],
      },
      xaxis: {
        type: 'category',
        categories: [
          `Caribbean Neatherlands`,
          'Venezuela',
          'Ecuador',
          'Colombia',
          'Afganistan',
        ],
        labels: {
          style: {
            colors: ['#fff'],
            fontSize: '10px',
            fontFamily: 'Fira Sans, sans-serif',
          },
        },
      },
      yaxis: {
        labels: {
          maxWidth: 115,
          style: {
            colors: [
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
            ],
            fontFamily: 'Fira Sans, sans-serif',
          },
        },
      },
      colors: ['#d50000', '#ef5350'],
    },
  });

  return (
    <div className="top-category">
      <h4 className="category-title">Worldwide</h4>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default TopCategory;
