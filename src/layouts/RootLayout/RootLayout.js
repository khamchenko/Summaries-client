import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from 'components/Header';

export default ({ route: { routes } }) => (
  <div>
    <Header />
    <div id="content">{renderRoutes(routes)}</div>
  </div>
);
