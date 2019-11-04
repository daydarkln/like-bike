import types from './NetworkTypes';

const initialState = {
  isListLoading: true,
  list: [],
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_NETWORKS_SUCCESS:
      return {
        ...state,
        list: action.data.networks,
        isListLoading: false
      };
    case types.REQUEST_NETWORKS_ERROR:
      return {
        ...state,
        error: action.error,
        isListLoading: false
      };

    default:
      return state;
  }
};
