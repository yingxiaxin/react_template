import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './homeConstants';

function* getAsyncHomeData() {
    try {
        const response = yield call(axios.get, './api/homeData.json');
        yield put({ type: actionTypes.HOME_DATA_RETURNED, data: response.data.data });
    } catch (e) {
        console.log(e);
    }
}

export function* homeSaga() {
    yield* takeEvery(actionTypes.GET_HOME_DATA, getAsyncHomeData);
}