import { takeLatest, call, put } from "redux-saga/effects";
import {  signUpAPI } from "./api";
import { SIGN_UP_INITIATED, SIGN_UP_SUCCESS, SIGN_UP_FAILED, SIGN_UP } from "./actionTypes";

export function* signUpSaga() {
	yield takeLatest(SIGN_UP, workerSaga);
}

function* workerSaga(action) {
	try {
		yield put({ type: SIGN_UP_INITIATED });
		const response = yield call(signUpAPI, action.payload.email, action.payload.password);
		if (response.registered) {
			yield put({ type: SIGN_UP_SUCCESS, payload: response })
		} else {
			yield put({ type: SIGN_UP_FAILED, payload: response })
		}
	}
	catch (error) {
		console.log(error)
	}
}
