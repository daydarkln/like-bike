import { pathOr } from 'ramda';

export const getNetworkList = state => pathOr([], ['networks', 'list'], state);

export const getCurrentNetworkName = state =>
  pathOr([], ['networks', 'name'], state);

export const getIsListLoading = state =>
  pathOr([], ['networks', 'isListLoading'], state);
