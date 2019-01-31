import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './detailConstants';

function* getAsyncDetailData(action) {
    try {
        const response = yield call(axios.get, '../api/homeData.json');
        yield put({ type: actionTypes.DETAIL_DATA_RETURNED, data: response.data.data });
    } catch (e) {
        console.log(e);
    }
}

function* getAsyncDetailItem(action) {
    try {
        const response = yield call(axios.get, '../api/detail.json?id=' + action.id);
        yield put({ type: actionTypes.DETAIL_ITEM_RETURNED, data: response.data.data} );
    } catch (e) {
        console.log(e);
    }
}

export function* detailSaga() {
    yield takeEvery(actionTypes.GET_DETAIL_DATA, getAsyncDetailData);
    yield takeEvery(actionTypes.GET_DETAIL_ITEM, getAsyncDetailItem);
}