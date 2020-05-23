import {
  SET_COUNTRIES,
  SET_MAP,
  SET_SELECTED_COUNTRY_COORD,
  SET_MAP_LOADED,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  SET_LAST_UPDATE,
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

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

export const setLastUpdate = updateString => ({
  type: SET_LAST_UPDATE,
  payload: updateString,
});
