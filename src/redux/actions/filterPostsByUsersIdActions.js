import * as type from './types';

export function getFilteredPosts(data) {
    return {
        type: type.GET_POSTS_BY_USERS_ID_REQUESTED,
        payload: data,
    };
}
