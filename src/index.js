import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';
import HelloStudents from './components/HelloStudents';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name = 'Dharmesh' year='2020' />
    <HelloStudent name = 'Peter' unit='JavaScript' />
    <HelloStudent name = 'Kyle' year='2021' unit='React' />
    <HelloStudents />
  </React.StrictMode>,
  document.getElementById('root')
);

