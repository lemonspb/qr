import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import QrPage from '../src/Pages/Qr-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageQuestions from '../src/Pages/PageQuestions';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={QrPage} />
      <Route path='/questions' exact component={PageQuestions} />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);