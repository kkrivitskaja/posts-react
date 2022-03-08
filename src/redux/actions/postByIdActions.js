import * as type from './types';

export function getPostById(data) {
    return {
        type: type.GET_ALL_POST_BY_ID_REQUESTED,
        payload: data,
    };
}
