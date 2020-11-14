import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(rootreducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
