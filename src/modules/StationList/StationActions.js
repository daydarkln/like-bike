import types from './StationTypes';

export const setCurrentStation = station => ({
  type: types.SET_CURRENT_STATION,
  station
});

export const getStations = id => ({
  type: types.GET_STATIONS,
  id
});

export const requestStationSuccess = data => ({
  type: types.REQUEST_STATION_SUCCESS,
  data
});

export const requestStationError = error => ({
  type: types.REQUEST_STATION_ERROR,
  error
});
