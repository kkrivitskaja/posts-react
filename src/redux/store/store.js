import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import { rootSaga } from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// (rootReducer);
sagaMiddleware.run(rootSaga);

export default store;