const createFeatures = countries => {
  if (countries.length) {
    const geojson = {
      type: 'FeatureCollection',
      features: countries.map(country => {
        const { countryInfo: { lat, long: lng, iso2 } = {} } = country;
        return {
          type: 'Feature',
          properties: {
            iso2,
            ...country,
          },
          geometry: {
            type: 'Point',
            coordinates: [lng, lat],
          },
        };
      }),
    };

    return geojson;
  }
};

export default createFeatures;
