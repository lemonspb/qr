import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import QrPage from '../src/Pages/Qr-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={QrPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);