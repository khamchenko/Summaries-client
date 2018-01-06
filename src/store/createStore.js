import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialState = {}) =>  {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      import('../reducers').then(module => {
        console.log(createStore(module.default).getState());
        store.replaceReducer(module.default);
        console.log(store.getState());
      });
    });
  }

  return store;
};