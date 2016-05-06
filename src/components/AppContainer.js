import React from 'react';
import { PropTypes } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from '../reducers';

const composedReducer = combineReducers(reducers);

const store = createStore(composedReducer);

class AppContainer extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


module.exports = AppContainer;
