import { fetch } from '../utilites/fetch';

export const requestNetworks = () => fetch.get('networks');
export const requestStations = id => fetch.get(`networks/${id}`);
