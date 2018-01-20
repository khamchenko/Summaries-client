import { applyMiddleware, createStore, compose } from 'redux';
import middlewares from '../redux/middlewares';
import rootReducer from '../redux/modules';

let composeEnhancers = compose;

if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);


export default () =>  {
  const store = createStore(rootReducer, enhancer);

  if (__DEV__ && module.hot) {
    module.hot.accept('../redux/modules', () => {
      import('../redux/modules').then(({ default: nextRootReducer }) => {
        store.replaceReducer(nextRootReducer);
      });
    });
  }

  return store;
};