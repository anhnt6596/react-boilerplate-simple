import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchLogin(action) {
    // try {
    //     // fetch
    //     const url = 'http://localhost:3001/user/login';
    //     const req_body = {
    //         username: action.username,
    //         password: action.password,
    //     };

    //     let res_data;

    //     yield fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(req_body),
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(responseJson => {
    //         res_data = responseJson;
    //     }).catch(e => console.log('-AnhNT-', e));
    //     if (res_data.errors) {
    //         yield put({ type: "LOGIN_FAILURE", errors: res_data.errors });
    //     } else
    //         yield put({ type: "LOGIN_SUCCESS", userdata: res_data });
    // } catch (e) {
    //     yield put({ type: "LOGIN_FAILURE" });
    // }
}

function* appSaga() {
    yield takeLatest("LOGIN_REQUEST", fetchLogin);
}

export default appSaga;