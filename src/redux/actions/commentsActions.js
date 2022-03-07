import * as type from './types';

export function getCommentsByPostId(data) {
    return {
        type: type.GET_ALL_COMMENTS_BY_POST_ID_REQUESTED,
        payload: data,
    };
}
