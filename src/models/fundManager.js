import * as fundService from '../services/fund';
import * as fundManagerService from '../services/fundManager';
export default {
  namespace: 'fundManager',
  state: {
    allManagers: null,
    activeManagerId: null,
    managerInfo: null,
    managerAbility: null,
    managerFunds: null,
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
    },

    saveActiveManagerId(state, {payload: activeManagerId}) {
      return {
        ...state,
        activeManagerId,
      }
    },

    saveManagerInfo(state, {payload: managerInfo}) {
      return {
        ...state,
        managerInfo,
      }
    },

    saveManagerAbility(state, {payload: managerAbility}) {
      return {
        ...state,
        managerAbility,
      }
    },

    saveManagerFunds(state, {payload: managerFunds}) {
      return {
        ...state,
        managerFunds,
      }
    }
  },
  effects: {

    *fetchAllManagers({payload: code}, {call, put, select}) {

      const {data} = yield call(fundService.fetchFund, code);

      // console.log(data.manager);

      yield put({
        type: 'saveAllManagers',
        payload: data.manager,
      });

      // console.log("!!!!!!!!!!");

      yield put({
        type: 'saveActiveManagerId',
        payload: data.manager[0].id,
      });

      yield put({
        type: 'fetchManagerInfo',
        payload: data.manager[0].id,
      });

      yield put({
        type: 'fetchManagerAbility',
        payload: data.manager[0].id,
      });

      yield put({
        type: 'fetchManagerFunds',
        payload: data.manager[0].id,
      });

    },

    // *fetchActiveManager({payload: code}, {call, put, select}) {
    //   const activeManager = yield select(state => state.fundManager.allManagers);
    //   const activeId = activeManager[0].id;
    //
    //   yield put({
    //     type: 'saveActiveManagerId',
    //     payload: data.manager[0].id,
    //   })
    // },

    *fetchManagerInfo({payload: managerId}, {call, put, select}) {
      const {data} = yield call(fundManagerService.fetchFundManagerInfo, managerId);

      // console.log(data);

      yield put({
        type: 'saveManagerInfo',
        payload: data,
      })
    },

    *fetchManagerAbility({payload: managerId}, {call, put, select}) {
      const activeManager = yield select(state => state.fundManager.activeManagerId);

      const {data} = yield call(fundManagerService.fetchFundManagerAbility, activeManager);

      // console.log(data);

      yield put({
        type: 'saveManagerAbility',
        payload: data,
      })
    },

    *fetchManagerFunds({payload: managerId}, {call, put, select}) {
      const activeManager = yield select(state => state.fundManager.activeManagerId);

      const {data} = yield call(fundManagerService.fetchFundManagerFunds, activeManager);

      console.log(data);

      yield put({
        type: 'saveManagerFunds',
        payload: data,
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
          dispatch({type: 'fetchAllManagers', payload: id});
        }
      });
    },
  },
};
