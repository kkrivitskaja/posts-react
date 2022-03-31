import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../actions/types';


const baseUrl = 'https://jsonplaceholder.typicode.com/';

function getAllUsers() {
    return axios
        .get(`${baseUrl}users`)
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
