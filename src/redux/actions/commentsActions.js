import * as type from './types';

export function getComments(comments) {
    return {
        type: type.GET_ALL_COMMENTS_REQUESTED,
        payload: comments,
    };
}
