import { all } from 'redux-saga/effects';
import postsSaga from './postsSaga';
import usersSaga from './usersSaga';
import commentsSaga from './commentsSaga';
import filteredPostsSaga from './filteredPostsSaga';
import filteredPostsByPostsIdSaga from './filteredPostsByPostIdSaga'

export function* rootSaga() {
    yield all([postsSaga(), usersSaga(), commentsSaga(), filteredPostsSaga(),filteredPostsByPostsIdSaga()]);
}
