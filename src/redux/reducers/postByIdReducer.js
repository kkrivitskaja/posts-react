import * as type from '../actions/types';

const initialState = {
    postById: null,
    loading: false,
    error: null,
};

function postByIdReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_POST_BY_ID_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_ALL_POST_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                postById: action.postById,
            };
        case type.GET_ALL_POST_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        default:
            return state;
    }
}

export default postByIdReducer;
