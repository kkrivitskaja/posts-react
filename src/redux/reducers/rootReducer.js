import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import commentsReducer from './commentsReducer';
import filteredPostsReducer from './filteredPostsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    filteredPosts: filteredPostsReducer,
});

export default rootReducer;