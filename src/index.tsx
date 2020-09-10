import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QrPage from '../src/Pages/Qr-page';
import PageQuiz from '../src/Pages/PageQuiz';
import { QuizProvider } from '../src/Components/Context';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <Route path='/' exact component={QrPage} />
        <Route path='/quiz/' component={PageQuiz} />
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);