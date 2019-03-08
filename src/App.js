import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import { AppRouter } from './common/AppRouter';
import { rootSaga } from './common/store/rootSaga';
import { rootReducer } from './common/store/rootReducer';
import { configureStore } from './common/store/configureStore';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, (applyMiddleware(sagaMiddleware)))
// const store = configureStore();   // ! todo
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  console.log("updated store", store.getState())
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
