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
