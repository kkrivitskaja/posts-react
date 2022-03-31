import * as type from './types';

export function getUsers(users) {
    return {
        type: type.GET_ALL_USERS_REQUESTED,
        payload: users,
    };
}
