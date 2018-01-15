import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App({ routes }) {
  return <BrowserRouter basename="/">{renderRoutes(routes)}</BrowserRouter>;
}

export default App;