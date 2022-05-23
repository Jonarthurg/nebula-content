import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';

console.log(document.getElementById('root'), "<--- WHAT'S THIS");

ReactDOM.render(<StrictMode> <Home /> </StrictMode>, document.getElementById('root'));