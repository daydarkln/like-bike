import { takeLatest, call, put } from 'redux-saga/effects';

import { requestNetworks } from '../../library/api/entities';
import * as actions from './NetworkActions';

import types from './NetworkTypes';

function* requestNetworksSaga() {
  try {
    const { data } = yield call(requestNetworks);
    yield put(actions.requestNetworksSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.requestNetworksError(error));
  }
}

export default function* watchNetworks() {
  yield takeLatest(types.GET_NETWORK_LIST, requestNetworksSaga);
}
