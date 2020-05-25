const getTopCases = ({
  countries = [],
  continent,
  topNumber,
  seriesTopics = [],
}) => {
  const byContinent = continent => country => country.continent === continent;

  const byCases = (countryA, countryB) => countryB.cases - countryA.cases;

  const getSeries = (topCountries = [], seriesTopics = []) => {
    return seriesTopics.map(topic => {
      return {
        name: topic.title,
        data: topCountries.map(country => country[topic.propName]),
      };
    });
  };

  const topCountries = continent
    ? countries.filter(byContinent(continent)).sort(byCases).slice(0, topNumber)
    : countries.sort(byCases).slice(0, topNumber);

  console.log(getSeries(topCountries, seriesTopics));
  return {
    countriesNames: topCountries.map(country => country.country),
    seriesData: getSeries(topCountries, seriesTopics),
  };
};

export default getTopCases;
