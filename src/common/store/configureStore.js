import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga';


export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, (applyMiddleware(sagaMiddleware)))

    sagaMiddleware.run(rootSaga);

    store.subscribe(() => {
        console.log("updated store", store.getState())
    })

}


