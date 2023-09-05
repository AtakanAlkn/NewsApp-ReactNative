import React from 'react';
import Router from './Router';
import {GlobalProvider} from './Context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;
