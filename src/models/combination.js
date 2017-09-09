import * as combinationService from '../services/combination';

export default {
  namespace: 'combination',
  state: {
    combinations:[],
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
