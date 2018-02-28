import asyncComponent from 'components/asyncComponent';
import { injectAsyncReducer } from 'store/createStore';

export default store => ({
  path: '/',
  exact: true,
  component: asyncComponent(() => {
    return import('./modules')
      .then(({ default: reducer }) => {
        injectAsyncReducer(store, 'index', reducer);
      })
      .then(() => {
        return import('./containers/IndexViewContainer')
          .then(({ default: component }) => {
            return component;
        });
    });
  }),
});
