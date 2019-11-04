import types from './NetworkTypes';

export const requestNetworks = () => ({
  type: types.GET_NETWORK_LIST
});

export const requestNetworksSuccess = data => ({
  type: types.REQUEST_NETWORKS_SUCCESS,
  data
});

export const requestNetworksError = error => ({
  type: types.REQUEST_NETWORKS_ERROR,
  error
});
