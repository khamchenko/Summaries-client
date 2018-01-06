import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import App from './App';

const appEl = document.querySelector('#app');
const renderApp = Component => {
  render(
    <Provider store={createStore()}>
      <Component />
    </Provider>,
    appEl,
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    import('./App').then((module) => {
      renderApp(module.default);
    });
  });
}
