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

    *fetchFundBrief({payload: code, onSuccess}, {call, put, select}) {
      const {data} = yield call(fundService.fetchFundBrief, code);

      console.log(data);

      yield put({
        type: 'saveFundBrief',
        payload: data,
      });

      if (onSuccess)
        onSuccess();
    },

    *fetchFund({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFund',
        payload: null,
      });

      const {data} = yield call(fundService.fetchFund, code);

      console.log(data);

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
        let path = pathname.split('/');
        if (path.indexOf('fund') === 1) {
          let id = path[2];
          window.scrollTo(0, 0);
          dispatch({type: 'fetchFundBrief', payload: id});
          if (path.length === 3) {
            dispatch({type: 'fetchFund', payload: id});
          }
        }
      });
    },
  },
};
