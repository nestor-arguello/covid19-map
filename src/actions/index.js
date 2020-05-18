import {
  SET_COUNTRIES,
  SET_MAP,
  SET_SELECTED_COUNTRY_COORD,
  SET_MAP_LOADED,
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

export const setMapLoaded = isLoaded => ({
  type: SET_MAP_LOADED,
  payload: isLoaded,
});
