/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { CountriesContext } from '../../contexts/CountriesProvider';
import countryToFlag from '../../utility/countryToFlag';

import './search-bar.styles.scss';

const theme = createMuiTheme({
  overrides: {
    MuiAutocomplete: {
      root: {
        width: 300,
        backgroundColor: '#3642ce',
      },
      input: {
        paddingLeft: 25,
        fontSize: 14,
        fontWeight: 600,
        color: '#ffffff',
        fontFamily: `"Helvetica Neue", Arial, Helvetica, sans-serif`,
        '&$focused': {
          color: '#ffffff !important'
        },
      },
      option: {
        fontSize: 15,
        fontFamily: `"Helvetica Neue", Arial, Helvetica, sans-serif`,
        '& > span': {
          marginRight: 10,
          fontSize: 14,
          fontWeight: 600,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: '#b9b9b9',
        fontSize: 16,
        fontFamily: `"Helvetica Neue", Arial, Helvetica, sans-serif`,
        '&.Mui-focused': {
          color: '#b9b9b9',
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderWidth: 1,
        borderColor: '#999999 !important',
      },
    },
    MuiIconButton: {
      label: {
        color: '#b9b9b9',
      },
    },
  },
});
// const useStyles = makeStyles({
//   root: {
//     width: 300,
//     backgroundColor: '#3642ce',
//   },
//   input: {
//     paddingLeft: 25,
//     fontSize: 16,
//   },
//   option: {
//     fontSize: 15,
//     '& > span': {
//       marginRight: 10,
//       fontSize: 18,
//     },
//   },
// });

const SearchBar = ({ ...props }) => {
  const countries = useContext(CountriesContext);

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="country-select-demo"
        options={countries}
        // classes={{
        //   option,
        //   root,
        //   input,
        // }}
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
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </ThemeProvider>
  );
};

export default SearchBar;
