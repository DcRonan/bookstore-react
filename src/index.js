import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state = [
  {
    id: Math.random(),
    title: 'Book 1',
    category: 'Category 1',
  },
  {
    id: Math.random(),
    title: 'Book 2',
    category: 'Category 2',
  },
  {
    id: Math.random(),
    title: 'Book 3',
    category: 'Category 3',
  },
];

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
