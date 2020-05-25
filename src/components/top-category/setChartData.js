import chartConfig from './chartConfig';

const setChartData = ({
  categories = [],
  series = [],
}) => {
  const newConfig = {
    ...chartConfig,
    series,
    options: {
      ...chartConfig.options,
      xaxis: {
        ...chartConfig.options.xaxis,
        categories,
      },
    },
  };

  return newConfig;
};

export default setChartData;