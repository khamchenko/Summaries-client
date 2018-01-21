import { combineReducers } from 'redux';
import reducers from '../redux/modules';

export default asyncReducers =>
  combineReducers({
    ...reducers,
    ...asyncReducers,
  });
