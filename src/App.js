import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App = ({ routes }) => (
  <BrowserRouter basename="/">
    {renderRoutes(routes)}
  </BrowserRouter>
);

export default App;