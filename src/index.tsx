import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import QrPage from '../src/Pages/Qr-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageQuestions from '../src/Pages/PageQuestions';
import {QuestioningProvider} from '../src/Components/Context';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <QuestioningProvider>
      <Route path='/' exact component={QrPage} />
      <Route path='/questions/'  component={PageQuestions} />
      </QuestioningProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);