import { RSAA } from 'redux-api-middleware';

import createReducer from 'helpers/createReducer';
import createRequestType from 'helpers/createRequestType';
import timestamp from 'helpers/timestamp';

const KEY = 'index/summaries';
const FETCH_SUMMARIES = createRequestType(`${KEY}/fetch-summaries`);

const initState = {
  data: [],
  meta: {},
  receivedAt: null,
  isLoading: false,
  error: null,
};

function fetchSummaries() {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:4000/api/summaries',
      method: 'GET',
      types: FETCH_SUMMARIES.getValues(),
    },
  };
}

const actionHandlers = {
  [FETCH_SUMMARIES.REQUEST]: (state, action) => ({
    ...state,
    isLoading: !action.payload,
    error: action.payload,
  }),
  [FETCH_SUMMARIES.SUCCESS]: (state, { payload: { data, ...meta } }) => ({
    ...state,
    data,
    meta,
    isLoading: false,
    receivedAt: timestamp(),
  }),
  [FETCH_SUMMARIES.FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
    isLoading: false,
    receivedAt: timestamp(),
  }),
};
const actionCreators = {
  fetchSummaries,
};

export {
  actionCreators,
  actionHandlers,
  initState,
};

export default createReducer(initState, actionHandlers);