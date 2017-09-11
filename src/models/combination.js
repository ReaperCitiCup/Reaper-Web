import * as combinationService from '../services/combination';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'combination',
  state: {
    combinations: [],
  },
  reducers: {
    saveCombinations(state, {payload: combinations}) {
      combinations.forEach(combination => {
        combination.key = combination.id;
      });

      return {...state, combinations};
    },


  },
  effects: {
    *fetchCombinations(action, {call, put, select}) {
      const {data} = yield call(combinationService.fetchCombination);

      yield put({
        type: 'saveCombinations',
        payload: data,
      });
    },

    *deleteCombination({payload: combinationId}, {call, put, select}) {
      const {data} = yield call(combinationService.deleteCombination, combinationId);

      if (data.result) {
        yield put({
          type: 'fetchCombinations',
        });
      } else {
        if (data.message === '无效操作') {
          yield  put(routerRedux.push('/404'));
        } else if (data.result === undefined) {
          yield put(routerRedux.push('/auth'));
        }
      }

    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        const array = pathname.split('/');
        if (array.length === 2 && array[1] === 'combination') {
          dispatch({
            type: 'fetchCombinations',
          });
        }
      });
    }
  },
};
