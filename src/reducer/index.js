import { createContext } from 'react';
import {
  SET_COUNTRIES,
  SET_MAP,
  SET_SELECTED_COUNTRY_COORD,
  SET_MAP_LOADED,
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
} from '../actions/actionTypes';

export const initialState = {
  countries: [],
  mapRef: createContext(),
  selectedCountryCoord: null,
  mapLoaded: false,
  drawerOpened: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        countries: payload,
      };
    }
    case SET_MAP: {
      return {
        ...state,
        map: payload,
      };
    }
    case SET_SELECTED_COUNTRY_COORD: {
      return {
        ...state,
        selectedCountryCoord: payload,
      };
    }
    case SET_MAP_LOADED: {
      return {
        ...state,
        mapLoaded: payload,
      };
    }
    case TOGGLE_DRAWER: {
      return {
        ...state,
        drawerOpened: !state.drawerOpened,        
      }
    }
    
    default:
      return state;
  }
};
