import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching all posts - urlPaths.getAllPosts()
//generates url https://jsonplaceholder.typicode.com/posts?userId=1&userId=2 – filter posts by users
//usersIds comes from search field
function getFilteredPosts(usersIds) {
    return axios
        .get(urlPaths.filterPostByUsers(usersIds))
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchFilteredPosts(action) {
    try {
        const filteredPosts = yield call(getFilteredPosts, action.payload);
        yield put({
            type: type.GET_POSTS_BY_USERSID_SUCCESS,
            filteredPosts: filteredPosts,
        });
    } catch (error) {
        yield put({
            type: type.GET_POSTS_BY_USERSID_FAILED,
            message: error.message,
        });
    }
}

function* filteredPostsSaga() {
    yield takeEvery(type.GET_POSTS_BY_USERSID_REQUESTED, fetchFilteredPosts);
}

export default filteredPostsSaga;
