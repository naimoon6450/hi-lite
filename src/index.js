import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Main';

// get the app from the DOM
const app = document.getElementById('app');
// render on app using ReactDOM
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  app,
  () => {
    console.log('DOM Rendered');
  }
);
