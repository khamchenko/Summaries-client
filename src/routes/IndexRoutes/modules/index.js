import { combineReducers } from 'redux';

import summaries, {
  initialState as summariesInitialState,
  actionCreators as summariesActionCreators,
} from './summaries';

const initialState = {
  summaries: summariesInitialState,
};

const actionCreators = {
  ...summariesActionCreators,
};

export {
  actionCreators,
  initialState,
};

export default combineReducers({
  summaries,
});