import React, { useReducer, useContext, useCallback } from 'react';
import { initialState, reducer } from './reducer';

export const AppContext = React.createContext();

export const AppProvider = ({ children, initState = initialState }) => {
  const [stateData, dispatch] = useReducer(reducer, initState);

  const setAction = useCallback((action, payload) => {
    dispatch({ type: action, payload: payload });
  }, []);

  const providerValue = { stateData, setAction };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppSelector = (selector) => {
  const { stateData } = useContext(AppContext);
  return selector(stateData);
};
