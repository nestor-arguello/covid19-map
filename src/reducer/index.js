import { createContext } from 'react';
import {
  SET_COUNTRIES,
  SET_MAP,
  SET_SELECTED_COUNTRY_COORD,
} from '../actions/actionTypes';

export const initialState = {
  countries: [],
  mapRef: createContext(),
  selectedCountryCoord: null,
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
    
    default:
      return state;
  }
};
