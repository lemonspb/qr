import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import QrPage from '../src/Pages/Qr-page';
import PageQuiz from '../src/Pages/PageQuiz';
import { QuizProvider } from '../src/Components/Context';

import './index.scss';

Sentry.init({
  dsn: 'https://9508c56d1dea43909b2bd4ab9e70a956@o452595.ingest.sentry.io/5440202',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});



ReactDOM.render(
    <Router>
      <QuizProvider>
        <Route path='/' exact component={QrPage} />
        <Route path='/quiz/' component={PageQuiz} />
      </QuizProvider>
    </Router>,
  document.getElementById('root')
);