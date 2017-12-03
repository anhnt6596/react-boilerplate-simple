import { fork } from 'redux-saga/effects';

import appSaga from './containers/App/saga';

export default function* rootSaga() {
    yield [
        fork(appSaga),
    ];
}
