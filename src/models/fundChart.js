/**
 * Created by st on 2017/9/6.
 */
import * as fundChartService from '../services/fundChart';

export default  {
  namespace: 'fundChart',
  state: {
    fundChart: null,
  },
  reducers: {
    drawFundChart(state, {payload: fundChart}) {
      return {
        ...state,
        fundChart,
      }
    },
  },
  effects: {
    *fetchFundChartData({payload: code}, {call, put, select}) {

      yield put({
        type: 'drawFundChart',
        payload: null,
      });

      const {data} = yield call(fundChartService.fetchFundChartData, code);

      // console.log(data);

      yield put({
        type: 'drawFundChart',
        payload: data,
      });
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // console.log(pathname.split('/'));
        if (pathname.indexOf('/fund/') === 0 && pathname.split('/').length === 3) {
          let id = pathname.split('/fund/')[1];
          window.scrollTo(0, 0);
          dispatch({type: 'fetchFundChartData', payload: id});
        }
      });
    },
  },
}
