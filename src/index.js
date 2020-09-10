import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent'

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name = 'Dharmesh' year='2020' />
  </React.StrictMode>,
  document.getElementById('root')
);

