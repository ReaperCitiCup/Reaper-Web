import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FundListPage from './routes/FundListPage';
import FundInfoPage from './routes/FundInfoPage';
import AccountPage from './routes/AccountPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/funds" component={FundListPage} />
      <Route path="/fund/:id" component={FundInfoPage} />
      <Route path="/account" component={AccountPage} />
    </Router>
  );
}

export default RouterConfig;
