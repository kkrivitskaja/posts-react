import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching all posts -urlPaths.getAllPosts()

function getAllPosts() {
    return axios
        .get(urlPaths.getAllPosts())
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchAllPosts() {
    try {
        const posts = yield call(getAllPosts);
        yield put({
            type: type.GET_ALL_POSTS_SUCCESS,
            posts: posts,
        });
    } catch (error) {
        yield put({
            type: type.GET_ALL_POSTS_FAILED,
            message: error.message,
        });
    }
}

function* postsSaga() {
    yield takeEvery(type.GET_ALL_POSTS_REQUESTED, fetchAllPosts);
}

export default postsSaga;
