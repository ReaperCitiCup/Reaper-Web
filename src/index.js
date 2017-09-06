import dva from 'dva';
import { browserHistory } from 'dva/router';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  history: browserHistory,
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/user"));
app.model(require("./models/fund"));
app.model(require("./models/fundChart"));
app.model(require("./models/search"));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
