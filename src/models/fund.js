import * as fundService from '../services/fund';
export default {
  namespace: 'fund',
  state: {
    fundBrief: null,
    fund: null,
  },
  reducers: {
    saveFundBrief(state, {payload: fundBrief}) {
      return {
        ...state,
        fundBrief,
      }
    },
    saveFund(state, {payload: fund}) {
      return {
        ...state,
        fund,
      }
    },
  },
  effects: {

    *fetchFundBrief({payload: code}, {call, put, select}) {
      const {data} = yield call(fundService.fetchFundBrief, code);

      console.log(data);

      yield put({
        type: 'saveFundBrief',
        payload: data,
      });
    },

    *fetchFund({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFund',
        payload: null,
      });

      const {data} = yield call(fundService.fetchFund, code);

      // console.log(data);

      yield put({
        type: 'saveFund',
        payload: data,
      });

    },


  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // console.log(pathname.split('/'))
        if (pathname.indexOf('/fund/') === 0 && pathname.split('/').length === 3) {
          let id = pathname.split('/fund/')[1];
          window.scrollTo(0, 0);
          dispatch({type: 'fetchFundBrief', payload: id});
          dispatch({type: 'fetchFund', payload: id});
        }
      });
    },
  },
};
