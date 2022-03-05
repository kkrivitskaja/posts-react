import {put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching all comments - urlPaths.getAllComments()

function getAllComments() {
    return axios
        .get(urlPaths.getAllComments())
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchAllComments() {
    try {
        const comments = yield call(getAllComments);
        yield put({
            type: type.GET_ALL_COMMENTS_SUCCESS,
            comments: comments
        });
    } catch (error) {
        yield put({
            type: type.GET_ALL_COMMENTS_FAILED,
            message: error.message,
        });
    }
}

function* commentsSaga() {
    yield takeEvery(type.GET_ALL_COMMENTS_REQUESTED, fetchAllComments);
}

export default commentsSaga;