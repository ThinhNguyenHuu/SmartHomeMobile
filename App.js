import React from 'react';
import AppWithNavigationState from 'navigations';
import { AppProvider } from './App/Context';

const App = () => {
  return (
    <AppProvider>
      <AppWithNavigationState />
    </AppProvider>
  );
};


export default App;
