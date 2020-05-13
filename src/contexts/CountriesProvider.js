import React, { useState, useEffect, createContext } from 'react';
import fetchCountries from '../utility/fetchCountries';

export const CountriesContext = createContext([]);

const CountriesProvider = ({ children, ...props }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries(setCountries);
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
