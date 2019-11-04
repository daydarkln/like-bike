import types from './StationTypes';
import { assoc, compose, pathOr } from 'ramda';

const initialState = {
  isLoading: false,
  list: undefined,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STATIONS:
      return compose(
        assoc('isLoading', true),
        assoc('current', undefined)
      )(state);

    case types.REQUEST_STATION_SUCCESS:
      const stationList = pathOr([], ['data', 'network', 'stations'], action);
      return compose(
        assoc('isLoading', false),
        assoc('list', stationList)
      )(state);

    case types.REQUEST_STATION_ERROR:
      return compose(
        assoc('isLoading', false),
        assoc('error', action.error)
      )(state);

    case types.SET_CURRENT_STATION:
      return compose(assoc('current', action.station))(state);

    default:
      return state;
  }
};
