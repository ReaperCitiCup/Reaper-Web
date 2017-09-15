import * as fundService from '../services/fund';
import * as fundManagerService from '../services/fundManager';
export default {
  namespace: 'fundManager',
  state: {
    fundCode: null,
    allManagers: null,
    activeManagerId: null,
    managerInfo: null,
    managerAbility: null,
    managerFunds: null,
    managerFundRank: null,
    managerFundReturns: null,
    managerFundRateTrend: null,
    // managerFundRankTrend: null,
    managerFundPerformance: null,
    managerPerformance: null,
    managerSocialNetwork: null,
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
    },

    saveManagerFundRank(state, {payload: managerFundRank}) {
      return {
        ...state,
        managerFundRank,
      }
    },

    saveManagerFundReturns(state, {payload: managerFundReturns}) {
      return {
        ...state,
        managerFundReturns,
      }
    },

    saveManagerFundRateTrend(state, {payload: managerFundRateTrend}) {
      return {
        ...state,
        managerFundRateTrend,
      }
    },

    // saveManagerFundRankTrend(state, {payload: managerFundRankTrend}) {
    //   return {
    //     ...state,
    //     managerFundRankTrend,
    //   }
    // },

    saveManagerFundPerformance(state, {payload: managerFundPerformance}) {
      return {
        ...state,
        managerFundPerformance,
      }
    },

    saveManagerPerformance(state, {payload: managerPerformance}) {
      return {
        ...state,
        managerPerformance,
      }
    },

    saveManagerSocialNetwork(state, {payload: managerSocialNetwork}) {
      return {
        ...state,
        managerSocialNetwork,
      }
    }
  },
  effects: {

    fetchAllManagers: [

      function*({payload: code}, {call, put, select}) {
        const {data} = yield call(fundService.fetchFund, code);

        // console.log(data);

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

        yield put({
          type: 'fetchManagerFundRank',
          payload: data.manager[0].id,
        });

        yield put({
          type: 'fetchManagerFundReturns',
          payload: data.manager[0].id,
        });

        yield put({
          type: 'fetchManagerFundRateTrend',
          payload: data.manager[0].id,
        });

        yield put({
          type: 'fetchManagerFundPerformance',
          payload: data.manager[0].id,
        });

        yield put({
          type: 'fetchManagerPerformance',
          payload: data.manager[0].id,
        });

        yield put({
          type: 'fetchManagerSocialNetwork',
          payload: data.manager[0].id,
        });
      },
      {type: 'takeLatest'}
    ],


    // *fetchActiveManager({payload: code}, {call, put, select}) {
    //   const activeManager = yield select(state => state.fundManager.allManagers);
    //   const activeId = activeManager[0].id;
    //
    //   yield put({
    //     type: 'saveActiveManagerId',
    //     payload: data.manager[0].id,
    //   })
    // },

    fetchManagerInfo: [
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerInfo, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerInfo',
          payload: data,
        })
      },
      {type: 'takeLatest'}
    ],

    fetchManagerAbility: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);

      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerAbility, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerAbility',
          payload: data,
        })
      },
      {type: 'takeLatest'}

    ],

    fetchManagerFunds: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerFunds, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerFunds',
          payload: data,
        })
      },
      {type: 'takeLatest'}

    ],

    fetchManagerFundRank: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerFundRank, managerId);

        yield put({
          type: 'saveManagerFundRank',
          payload: data,
        })
      },
      {type: 'takeLatest'}
    ],

    fetchManagerFundReturns: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerFundReturns, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerFundReturns',
          payload: data,
        })
      },
      {type: 'takeLatest'}

    ],

    fetchManagerFundRateTrend: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerFundRateTrend, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerFundRateTrend',
          payload: data,
        })
      },
      {type: 'takeLatest'}

    ],

    // *fetchManagerFundRankTrend({payload: managerId}, {call, put, select}) {
    //   // const activeManager = yield select(state => state.fundManager.activeManagerId);
    //
    //   const {data} = yield call(fundManagerService.fetchFundManagerFundRankTrend, managerId);
    //
    //   console.log(data);
    //
    //   yield put({
    //     type: 'saveManagerFundRankTrend',
    //     payload: data,
    //   })
    // },

    fetchManagerFundPerformance: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerFundPerformance, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerFundPerformance',
          payload: data,
        })
      },
      {type: 'takeLatest'}

    ],

    fetchManagerPerformance: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);

      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerPerformance, managerId);

        // console.log(data);

        yield put({
          type: 'saveManagerPerformance',
          payload: data,
        })

      },
      {type: 'takeLatest'}

    ],

    fetchManagerSocialNetwork: [
      // const activeManager = yield select(state => state.fundManager.activeManagerId);
      function*({payload: managerId}, {call, put, select}) {
        const {data} = yield call(fundManagerService.fetchFundManagerSocialNetwork, managerId);

        // console.log("!!!!!!!!!!!!!!!");
        // console.log(data);

        yield put({
          type: 'saveManagerSocialNetwork',
          payload: data,
        })
      },
      {type: 'takeLatest'}


    ],
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
