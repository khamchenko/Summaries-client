import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ApplyTheme } from 'rambler-ui/theme';

const App = ({ routes }) => (
  <ApplyTheme>
    <BrowserRouter basename="/">
      {renderRoutes(routes)}
    </BrowserRouter>
  </ApplyTheme>
);

export default App;