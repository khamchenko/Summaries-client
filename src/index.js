import React from 'react';
import { render } from 'react-dom';
import App from './App';

const appEl = document.querySelector('#app');
const renderApp = Component => {
  render(
    <Component />,
    appEl,
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}