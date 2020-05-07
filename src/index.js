import React from 'react';
import ReactDOM from 'react-dom';
import NewAp from './NewAp';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <NewAp />
  </BrowserRouter>,
  document.getElementById('root')
);
