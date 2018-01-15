import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import App from './App';
import routes from './routes';

const appEl = document.querySelector('#app');
const store = createStore();
const renderApp = (Component, appRoutes) => {
  render(
    <Provider store={store}>
      <Component routes={appRoutes(store)} />
    </Provider>, appEl);
};

renderApp(App, routes);

if (__DEV__ && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    renderApp(NextApp, routes);
  });

  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default;

    renderApp(App, nextRoutes);
  });
}
