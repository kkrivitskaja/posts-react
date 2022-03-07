// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from '../reducers/rootReducer';
// import { rootSaga } from '../saga/rootSaga';
// // import { loadState, saveState } from './localStorage';

// const sagaMiddleware = createSagaMiddleware();
// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// // const initialState = { selectedUsers: JSON.parse(localStorage.getItem('selected-users')) } || {};
// // const initialState = loadState()


// const store = compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore)(persistedReducer);

// // store.subscribe(() => console.log('State after dispatch: ', store.getState().selectedUsers));
// // store.subscribe(() => store.getState().selectedUsers);

// // store.subscribe(
// //     () => {
// //         saveState({
// //             // todos: store.getState().todos,
// //         });
// //     }, 1000
// // );



// // (rootReducer);
// sagaMiddleware.run(rootSaga);
// // console.log('initialState', initialState);

// export const persistor = persistStore(store);
// export default store;


import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer';
import { rootSaga } from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
   
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persistedReducer);

// (rootReducer);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;