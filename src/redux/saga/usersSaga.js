import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';
import { urlPaths } from '../../base/urlApiPaths';

// url JSONPlaceholder for fetching all users - urlPaths.getAllUsers()

function getAllUsers() {
    return axios
        .get(urlPaths.getAllUsers())
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function* fetchAllUsers() {
    try {
        const users = yield call(getAllUsers);
        yield put({ type: type.GET_ALL_USERS_SUCCESS, users: users });
    } catch (error) {
        yield put({
            type: type.GET_ALL_USERS_FAILED,
            message: error.message,
        });
    }
}

function* usersSaga() {
    yield takeEvery(type.GET_ALL_USERS_REQUESTED, fetchAllUsers);
}

export default usersSaga;
