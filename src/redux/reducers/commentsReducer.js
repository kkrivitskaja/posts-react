import * as type from '../actions/types';

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_COMMENTS_BY_POSTID_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_ALL_COMMENTS_BY_POSTID_SUCCESS:
            return {
                ...state,
                loading: false,
                    comments: action.comments,
            };
        case type.GET_ALL_COMMENTS_BY_POSTID_FAILED:
            return {
                ...state,
                loading: false,
                    error: action.message,
            };
        
        default:
            return state;
    }
}

export default commentsReducer;