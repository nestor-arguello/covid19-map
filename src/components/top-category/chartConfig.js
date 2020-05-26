import formatNumber from '../../utility/formatNumber';

export default {
  series: [
    {
      name: 'serie 1',
      data: [44, 55, 41, 64, 22],
    },
    {
      name: 'serie 2',
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
      offsetX: 42,
      style: {
        fontSize: '12px',
        fontFamily: 'Fira Sans, sans-serif',
        colors: ['#fff'],
      },
      formatter: formatNumber,
      dropShadow: {
        enabled: true,
        opacity: 0.6,
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
        formatter: value => {
          const valueString = `${value}`;

          const formattedValue =
            value >= 1000000
              ? `${valueString.slice(0, -6)}m`
              : value >= 1000
              ? `${valueString.slice(0, -3)}k`
              : valueString;

          return formattedValue;
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
    colors: ['#ef5350', '#008EFF', '#d50000'],
    // colors: ['#d50000', '#3f64eb', '#0aa162', '#ef5350'],
  },
};
