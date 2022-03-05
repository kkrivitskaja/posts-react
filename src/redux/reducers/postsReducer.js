import * as type from '../actions/types';

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_POSTS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.posts,
            };
        case type.GET_ALL_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        default:
            return state;
    }
}

export default postsReducer;
