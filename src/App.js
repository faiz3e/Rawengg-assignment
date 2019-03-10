import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { configureStore } from './common/store/configureStore';
import { AppRouter } from './common/routes/AppRouter';

const store = configureStore();  

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
