import { all, fork } from 'redux-saga/effects';
import { loginSaga } from "../../home/pages/login/saga";

export function* rootSaga() {
    yield all([fork(loginSaga)]);
}