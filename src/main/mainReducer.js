import { combineReducers } from 'redux';
import networks from '../modules/NetworkList/NetworkReducer';
import stations from '../modules/StationList/StationReducer';

const mainReducer = combineReducers({
  networks,
  stations
});

export default mainReducer;
