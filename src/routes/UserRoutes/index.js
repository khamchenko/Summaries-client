import asyncComponent from 'components/asyncComponent';
import { injectAsyncReducer } from 'store/createStore';

export default (store) => ({
  path: '/user',
  exact: true,
  component: asyncComponent(() => {
    return import('./components/UserView').then(module => {
      
      import('./modules').then(reducer => {
        injectAsyncReducer(store, 'user', reducer.default);
      });
      
      return module.default;
    });
  }),
});
