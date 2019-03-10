import { all, fork } from 'redux-saga/effects';
import { loginSaga } from "../../home/pages/login/saga";
import { signUpSaga } from '../../home/pages/signUp/saga';

export function* rootSaga() {
    yield all([fork(loginSaga),fork(signUpSaga)]);
}