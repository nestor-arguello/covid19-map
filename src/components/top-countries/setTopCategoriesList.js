import { COUNTRY_SERIES_TOPICS } from '../../constants';
import getTopCases from './getTopCases';

const setTopCategoriesList = countries => {
  const topCasesEurope = getTopCases({
    countries,
    continent: 'Europe',
    topNumber: 5,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });

  const topCasesSouthAmerica = getTopCases({
    countries,
    continent: 'South America',
    topNumber: 5,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });

  const topCasesNorthAmerica = getTopCases({
    countries,
    continent: 'North America',
    topNumber: 3,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });

  const topCasesAfrica = getTopCases({
    countries,
    continent: 'Africa',
    topNumber: 5,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });

  const topCasesAsia = getTopCases({
    countries,
    continent: 'Asia',
    topNumber: 5,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });

  //  const topCasesOceania = getTopCases({
  //   countries,
  //   continent: 'Europe',
  //   topNumber: 5,
  //   seriesTopics: COUNTRY_SERIES_TOPICS,
  // });

  const topCasesWorldwide = getTopCases({
    countries,
    continent: null,
    topNumber: 5,
    seriesTopics: COUNTRY_SERIES_TOPICS,
  });
  
  return [
    {
      title: 'Worldwide',
      ...topCasesWorldwide,
    },
    {
      title: 'Europe',
      ...topCasesEurope,
    },
    {
      title: 'South America',
      ...topCasesSouthAmerica,
    },
    {
      title: 'North America',
      ...topCasesNorthAmerica,
    },
    {
      title: 'Asia',
      ...topCasesAsia,
    },
    {
      title: 'Africa',
      ...topCasesAfrica,
    },
  ]
}

export default setTopCategoriesList;