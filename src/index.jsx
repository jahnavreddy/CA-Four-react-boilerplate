import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import QuestionBox from './components/QuestionBox';
import Home from './components/Home';

ReactDOM.render(
  <div>
    <Home />
    {/* <App /> */}
    {/* <QuestionBox /> */}
  </div>,
  document.getElementById('root')
);