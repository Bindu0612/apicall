import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NewAp from './NewAp';
// import Myapi from './Myapi';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <NewAp /> 
          </BrowserRouter>,
  document.getElementById('root')
);
