import { pathOr } from 'ramda';

export const getIsLoading = state =>
  pathOr(false, ['stations', 'isLoading'], state);

export const getStationList = state => pathOr([], ['stations', 'list'], state);

export const getCurrentStation = state =>
  pathOr(false, ['stations', 'current'], state);

export const getCurrentStationName = state =>
  pathOr('Undefined station', ['stations', 'current', 'name'], state);

export const getCurrentId = state =>
  pathOr('Undefined station', ['stations', 'current', 'id'], state);

export const getTotalBikes = state => {
  const list = pathOr([], ['stations', 'list'], state);
  const totalBikes = list
    .map(item => item.free_bikes || 0)
    .reduce((acc, curr) => acc + curr, 0);
  return totalBikes;
};
