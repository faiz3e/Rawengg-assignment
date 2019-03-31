import { takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { CREATE_OFFER } from "../login/actionTypes";
import { offerslookApi } from "../signUp/api";

export function* offersLookSaga() {

	// yield takeLatest(CREATE_OFFER, workerSaga);
	yield takeEvery(CREATE_OFFER, workerSaga);
}

function* workerSaga(action) {
	try {
		for (let i = 0; i < action.payload; i++) {
			const response = yield call(offerslookApi, action.payload);
			// console.log("response", response)
		}
	}
	catch (error) {
		console.log("error", error)
	}
}
