import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store/Store';
console.log(Store)
ReactDOM.render(<App features={Store}/>, document.getElementById('root'));