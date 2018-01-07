const initState = {
  data: [{ name: 'Developer 1'}, { name: 'Developer 2'}],
  isLoading: false,
  receivedAt: null,
};

export default (state = initState, action) => {
  if (action.type === 'ADD_DEVELOPER') {
    return {
      ...state,
      data: [...state.data, action.payload],
    };
  }
  return state;
};