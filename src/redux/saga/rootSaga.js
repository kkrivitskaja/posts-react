import { all } from 'redux-saga/effects';

import usersSaga from './usersSaga';


export function* rootSaga() {
    yield all([ usersSaga()]);
}
