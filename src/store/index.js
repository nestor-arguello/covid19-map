import React, { createContext, useReducer, useContext } from 'react';
import { initialState, reducer } from '../reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreValue = () => useContext(StoreContext);
