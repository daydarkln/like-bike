import { all, fork } from 'redux-saga/effects';

import watchNetworks from '../modules/NetworkList/NetworkSagas';
import watchStations from '../modules/StationList/StationSagas';

export default function* mainSaga() {
  yield all([fork(watchNetworks), fork(watchStations)]);
}
