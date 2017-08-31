import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FundListPage from './routes/FundListPage';
import FundInfoPage from './routes/FundInfoPage';
import FundManagerPage from './routes/FundManagerPage';
import AccountPage from './routes/AccountPage';
import FundCompanyPage from './routes/FundCompanyPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/funds" component={FundListPage} />
      <Route path="/fund/:id" component={FundInfoPage} />
      <Route path="/fund/:id/manager/:managerId" component={FundManagerPage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/fund/:id/company/:companyId" component={FundCompanyPage} />
    </Router>
  );
}

export default RouterConfig;
