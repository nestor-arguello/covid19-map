import { createMuiTheme } from '@material-ui/core/styles';

const autoCompleteTheme = {
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
          color: '#ffffff !important',
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
};

export default createMuiTheme(autoCompleteTheme);
