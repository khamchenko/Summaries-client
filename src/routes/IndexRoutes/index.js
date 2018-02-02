import asyncComponent from 'components/asyncComponent';
import { injectAsyncReducer } from 'store/createStore';

export default (store) => ({
  path: '/',
  exact: true,
  component: asyncComponent(() => {
    return import('./modules')
      .then(reducer => {
        injectAsyncReducer(store, 'index', reducer.default);
      })
      .then(() => {
        return import('./containers/IndexViewContainer').then(module => {
          return module.default;
        });
    });
  }),
});
