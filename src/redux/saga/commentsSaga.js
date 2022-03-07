import {put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching all comments by postId - urlPaths.getCommentsByPostId()

function getAllCommentsByPostId(postId) {

    return axios
        .get(urlPaths.getCommentsByPostId(postId))
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchAllCommentsByPostId(action) {
    try {
        const comments = yield call(getAllCommentsByPostId, action.payload);
        yield put({
            type: type.GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
            comments: comments,
        });
    } catch (error) {
        yield put({
            type: type.GET_ALL_COMMENTS_BY_POST_ID_FAILED,
            message: error.message,
        });
    }
}

function* commentsSaga() {
    yield takeEvery(type.GET_ALL_COMMENTS_BY_POST_ID_REQUESTED, fetchAllCommentsByPostId);
}

export default commentsSaga;