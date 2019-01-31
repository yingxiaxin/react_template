import { all, fork } from 'redux-saga/effects';
import { saga as headerSaga } from '../common/header/store';
import { saga as homeSaga } from '../pages/home/store';
import { saga as detailSaga } from '../pages/detail/store';

export default function* rootSaga() {
    yield all([
        fork(headerSaga),
        fork(homeSaga),
        fork(detailSaga)
    ])
}