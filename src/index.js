import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const wrapper = document.getElementById('root');
// eslint-disable-next-line
wrapper ? ReactDOM.render(<App />, wrapper) : false;
