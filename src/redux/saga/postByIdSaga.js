import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching  posts by postId - urlPaths.getPost()
//generates url https://jsonplaceholder.typicode.com/posts/postId
//postsIds comes from useParams()

function getPostById(postsIds) {
    return axios
        .get(urlPaths.getPost(postsIds))
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchPostById(action) {
    try {
        const postById = yield call(getPostById, action.payload);
        yield put({
            type: type.GET_ALL_POST_BY_ID_SUCCESS,
            postById: postById,
        });
    } catch (error) {
        yield put({
            type: type.GET_ALL_POST_BY_ID_FAILED,
            message: error.message,
        });
    }
}

function* postByIdSaga() {
    yield takeEvery(type.GET_ALL_POST_BY_ID_REQUESTED, fetchPostById);
}

export default postByIdSaga;
