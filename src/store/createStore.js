import { applyMiddleware, createStore, compose } from 'redux';
import middlewares from '../redux/middlewares';
import createReducer from './createReducers';

let composeEnhancers = compose;

if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

const createAppStore = (initialState = {}) =>  {
  const store = createStore(createReducer(), initialState, enhancer);

  if (__DEV__ && module.hot) {
    module.hot.accept('./createReducers', () => {
      import('./createReducers').then(({ default: nextCreateReducer }) => {
        store.replaceReducer(nextCreateReducer());
      });
    });
  }

  store.asyncReducers = {};

  return store;
};

const injectAsyncReducer = (store, reducerName, asyncReducer) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, reducerName)) {
    if (__DEV__) {
      console.warn(`reducer with name "${reducerName}" already in use`);
    }

    return;
  }

  store.asyncReducers[reducerName] = asyncReducer;

  const reducer = createReducer(store.asyncReducers);

  store.replaceReducer(reducer);
};

export {
  injectAsyncReducer,
};

export default createAppStore;