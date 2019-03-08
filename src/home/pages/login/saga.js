import { takeLatest } from "redux-saga/effects";

// export function* fetchCartWatcherSaga() {
//   yield takeLatest('GET_CART', workerSaga);
//   console.log("watcher saga call");
// }

// function* workerSaga() {
//   console.log("watcher saga call");
// }


export function* loginSaga() {
    yield takeLatest('GET_TRY', workerSaga);
    console.log("watcher cart saga call");
}

function* workerSaga() {
    // try {
        console.log("worker saga call");
        // console.log("response", response);
    // }
    // catch (error) {
    //     console.log(error);
    //     //   yield put({ type: FETCH_PRODUCT_FAILED, error });
    // }
}
