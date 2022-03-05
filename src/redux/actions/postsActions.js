import * as type from './types';

export function getPosts(posts) {
    return {
        type: type.GET_ALL_POSTS_REQUESTED,
        payload: posts,
    };
}
