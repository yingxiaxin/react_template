import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './headerConstants';

function* getAsyncList() {
    try {
        const response = yield call(axios.get, './api/headerList.json');
        yield put({ type: actionTypes.GETLIST, data: response.data.data, totalPage: Math.ceil(response.data.data.length / 10) });
    } catch (e) {
        console.log(e);
    }
}

export function* headerSaga() {
    yield* takeEvery(actionTypes.GETLIST_ASYNC, getAsyncList)
}