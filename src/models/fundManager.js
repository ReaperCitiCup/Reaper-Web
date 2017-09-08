import * as fundService from '../services/fund';
export default {
  namespace: 'fundManager',
  state: {
    fundCode: null,
    allManagers: null,
    activeManager: null,
  },
  reducers: {
    saveFundCode(state, {payload: fundCode}) {
      return {
        ...state,
        fundCode,
      }
    },
    saveAllManagers(state, {payload: allManagers}) {
      return {
        ...state,
        allManagers,
      }
    }
  },
  effects: {

    *fetchAllManagers({payload: code}, {call, put, select}) {

      const {data} = yield call(fundService.fetchFund, code);

      console.log(data);

      yield put({
        type: 'saveAllManagers',
        payload: data.manager,
      })
    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        let path = pathname.split('/');
        // console.log(path);
        if (path.indexOf('fund') === 1 && path.indexOf('manager') === 3 && path.length === 4) {
          let id = path[2];
          // console.log("-------id: "+id);
          window.scrollTo(0, 0);
          dispatch({type: 'saveFundCode', payload: id});
          dispatch({type: 'fetchAllManagers', payload: id});
        }
      });
    },
  },
};
