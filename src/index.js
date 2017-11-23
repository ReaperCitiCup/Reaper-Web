import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';


import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory,
});


// 2. Plugins
// app.use({});
app.use(createLoading({
  effects: true
}));

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/user"));
app.model(require("./models/fundAnalysisChart"));
app.model(require("./models/backTestModal"));
app.model(require("./models/fundCompany"));
app.model(require("./models/combination"));
app.model(require("./models/createCombination"));
app.model(require("./models/fundManager"));
app.model(require("./models/fund"));
app.model(require("./models/fundChart"));
app.model(require("./models/search"));
app.model(require("./models/assetAllocation"));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
