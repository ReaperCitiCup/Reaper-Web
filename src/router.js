import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AccountPage from './routes/AccountPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/account" component={AccountPage} />
    </Router>
  );
}

export default RouterConfig;
