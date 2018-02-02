import { RSAA } from 'redux-api-middleware';
import createReducer from 'helpers/createReducer';
import createRequestAction from 'helpers/createRequestAction';

const FETCH_SUMMARIES = createRequestAction('index/summaries/fetch-summaries');

const initialState = {
  data: [],
  receivedAt: null,
  isLoading: false,
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

const actionTypes = {
  FETCH_SUMMARIES,
};

const actionCreators = {
  fetchSummaries,
};

const actionHandlers = {
  [FETCH_SUMMARIES.REQUEST]: state => ({
    ...state,
    isLoading: true,
    errors: false,
  }),
  [FETCH_SUMMARIES.SUCCESS]: (state, { payload: { data, ...meta } }) => ({
    ...state,
    data,
    meta,
    isLoading: false,
  }),
  [FETCH_SUMMARIES.FAILURE]: (state, action) => ({
    ...state,
    errors: action.payload,
    isLoading: false,
  }),
};

export { actionCreators, initialState, actionHandlers, actionTypes };

export default createReducer(initialState, actionHandlers);