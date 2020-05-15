import {
  SET_COUNTRIES,
  SET_MAP,
  SET_SELECTED_COUNTRY_COORD,
} from '../actions/actionTypes';

export const setCountries = countries => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setMap = map => ({
  type: SET_MAP,
  payload: map,
});

export const setSelectedCountryCoord = (lat, lng) => ({
  type: SET_SELECTED_COUNTRY_COORD,
  payload: [lat, lng],
});
