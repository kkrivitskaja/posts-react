import * as type from '../actions/types';

const initialState = {
    filteredPosts: [],
    loading: false,
    error: null,
};


function filteredPostsReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_POSTS_BY_USERS_ID_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_POSTS_BY_USERS_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                filteredPosts: action.filteredPosts,
            };
        case type.GET_POSTS_BY_USERS_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
       
        default:
            return state;
    }
}

export default filteredPostsReducer;
