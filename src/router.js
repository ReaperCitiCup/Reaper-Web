import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FundListPage from './routes/FundListPage';
import FundInfoPage from './routes/FundInfoPage';
import FundManagerPage from './routes/FundManagerPage';
import FundCompanyPage from './routes/FundCompanyPage';
import FundAnalysisPage from './routes/FundAnalysisPage';
import CombinationPage from './routes/CombinationPage';

import AccountPage from './routes/AccountPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/funds" component={FundListPage} />
      <Route path="/fund/:id" component={FundInfoPage} />
      <Route path="/fund/:id/manager/:managerId" component={FundManagerPage} />
      <Route path="/fund/:id/company/:companyId" component={FundCompanyPage} />
      <Route path="/fund/:id/company" component={FundCompanyPage} />
      <Route path="/fund/:id/analysis" component={FundAnalysisPage} />
      <Route path="/combination" component={CombinationPage} />


      <Route path="/account" component={AccountPage} />
    </Router>
  );
}

export default RouterConfig;
