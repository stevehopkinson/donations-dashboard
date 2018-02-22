import React, { Component } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from '../store';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App charityId={2116} />
      </Provider>
    )
  }
}