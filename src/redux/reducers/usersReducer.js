import * as type from '../actions/types';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_ALL_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case type.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users,
            };
        case type.GET_ALL_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };

        default:
            return state;
    }
}

export default usersReducer;
