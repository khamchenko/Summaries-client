import { RSAA } from 'redux-api-middleware';
import queryString from 'query-string';

import createReducer from 'helpers/createReducer';
import createRequestType from 'helpers/createRequestType';
import timestamp from 'helpers/timestamp';

const KEY = 'index/summaries/';
const FETCH_SUMMARIES = createRequestType(`${KEY}fetch-summaries`);

const initState = {
  data: [],
  meta: {
    count: 0,
    pages: 0,
    filter: {
      title: '',
      size: 5,
      tags: [],
      page: 1,
    },
  },
  receivedAt: null,
  isLoading: false,
  error: null,
};

function fetchSummaries(params = {}) {
   const query = queryString.stringify(params);

  return {
    [RSAA]: {
      endpoint: `http://localhost:4000/api/summaries?${query}`,
      method: 'GET',
      types: FETCH_SUMMARIES.getValues(),
    },
  };
}

const actionHandlers = {
  [FETCH_SUMMARIES.REQUEST]: (state, { payload }) => {
    if (payload) {
      return {
        ...initState,
        error: payload,
      };
    }

    return {
      ...state,
      isLoading: true,
    };
  },
  [FETCH_SUMMARIES.SUCCESS]: (state, { payload: { data, ...meta } }) => ({
    ...state,
    data,
    meta,
    isLoading: false,
    receivedAt: timestamp(),
    error: null,
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