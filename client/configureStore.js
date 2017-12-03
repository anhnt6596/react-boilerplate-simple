import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from './sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    store.runSaga = sagaMiddleware.run;

    store.runSaga(rootSaga);

    return store;
}
