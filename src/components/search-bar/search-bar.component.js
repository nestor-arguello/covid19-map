/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ThemeProvider } from '@material-ui/core/styles';

import './search-bar.styles.scss';

import autoCompleteTheme from './autocomplete.styles';
import countryToFlag from '../../utility/countryToFlag';
import { useStoreValue } from '../../store';
import { setSelectedCountryCoord } from '../../actions';

const SearchBar = ({ ...props }) => {
  const {
    state: { countries = [] } = {},
    dispatch,
  } = useStoreValue();

  const dispatchSetSelectedCountry = (lat, lng) =>
    dispatch(setSelectedCountryCoord(lat, lng));

  const handleChange = dispatchFunction => (event, value, reason) => {
    if (reason === 'select-option' && value && value.countryInfo) {
      const { lat, long: lng } = value.countryInfo;

      dispatchFunction(lat, lng);
    }
  };

  return (
    <ThemeProvider theme={autoCompleteTheme}>
      <Autocomplete
        id="country-select-demo"
        options={countries}
        autoHighlight
        getOptionLabel={option => option.country}
        renderOption={option => (
          <React.Fragment>
            <span>{countryToFlag(option.countryInfo.iso2)}</span>
            {option.country}
          </React.Fragment>
        )}
        renderInput={params => (
          <TextField
            {...params}
            label="Search country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
        onChange={handleChange(dispatchSetSelectedCountry)}
      />
    </ThemeProvider>
  );
};

export default SearchBar;
