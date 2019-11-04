import { takeLatest, call, put } from 'redux-saga/effects';

import { requestStations } from '../../library/api/entities';
import * as actions from './StationActions';

import types from './StationTypes';

function* requestNetworksSaga({ id }) {
  try {
    const { data } = yield call(() => requestStations(id));
    yield put(actions.requestStationSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.requestStationError(error));
  }
}

export default function* watchStations() {
  yield takeLatest(types.GET_STATIONS, requestNetworksSaga);
}
