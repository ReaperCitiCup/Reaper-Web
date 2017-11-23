import * as combinationService from '../services/combination';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'combination',
  state: {
    combinations: [],
    combinationReport: null,
    showModal: false,
    currentInfo: null,
    backtestSuccess: true
  },
  reducers: {
    saveCombinations(state, {payload: combinations}) {
      if (combinations) {
        combinations.forEach(combination => {
          combination.key = combination.id;
          combination.volatility += '%';
          combination.newProfit += '%';
          combination.annualProfit += '%';
        });
      }

      return {...state, combinations};
    },

    saveCombinationReport(state, {payload: combinationReport}) {
      return {...state, combinationReport};
    },

    saveShowModalInfo(state, {payload: showModal, currentInfo}) {
      // console.log(showModal);
      return {...state, showModal, currentInfo};
    },

    saveBacktestSuccess(state, {payload: backtestSuccess}) {
      return {...state, backtestSuccess}
    },

    clearCombinationReport(state) {
      state.combinationReport = null;
      state.backtestSuccess = true;
      return {...state}
    }


  },
  effects: {
    * fetchCombinations(action, {call, put, select}) {

      const {user} = yield select(state => state.user);

      if (!user) return;

      const {data} = yield call(combinationService.fetchCombination);

      yield put({
        type: 'saveCombinations',
        payload: data,
      });
    },

    * deleteCombination({payload: combinationId, onSuccess, onError}, {call, put, select}) {
      const {user} = yield select(state => state.user);
      const {data} = yield call(combinationService.deleteCombination, combinationId);

      // console.log(user);
      // console.log(combinationId);
      // console.log(data);
      // console.log(data.result);
      // console.log(data.message);

      if (data.result) {
        yield put({
          type: 'fetchCombinations',
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        if (data.message === '无效操作') {
          yield  put(routerRedux.push('/404'));
        } else if (data.result === undefined) {
          yield put(routerRedux.push('/auth'));
        }
        onError();
      }

    },

    * backtestCombination(action, {call, put, select}) {
      // const {data} = yield call(combinationService.backtestCombination, backtestInfo.combinationId, backtestInfo.baseIndex, baseIndex.startDate, baseIndex.endDate);
      const {id, startDate, endDate, baseIndex} = yield select(state => state.backTestModal);

      // console.log({id, startDate, endDate, baseIndex});
      yield put(routerRedux.push(`/combination/${id}?startDate=${startDate}&endDate=${endDate}&baseIndex=${baseIndex}`));


    },
    * fetchBacktestReport({payload: {id, baseIndex, startDate, endDate}}, {call, put, select}) {

      yield put({
        type: 'clearCombinationReport'
      });

      const {data} = yield call(combinationService.backtestCombination, id, baseIndex, startDate, endDate);
      // console.log(data);

      if (!data.isSuccess) {
        yield put({
            type: 'saveBacktestSuccess',
            payload: false,
          }
        )
      } else {
        yield put({
            type: 'saveBacktestSuccess',
            payload: true,
          }
        )
        yield put({
            type: 'saveCombinationReport',
            payload: data,
          }
        )
      }

    }
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const array = pathname.split('/');
        // console.log(array, query)

        // const combinationId = array[2];
        if (array.length === 2 && array[1] === 'combination') {
          dispatch({type: 'fetchCombinations',});
        } else if (array.length === 3 && array[1] === 'combination') {
          dispatch({
            type: 'fetchBacktestReport',
            payload: {
              ...query,
              id: array[2]
            }
          });

        }
      });
    }
  },
};
