import * as searchService from '../services/search';
import {SEARCH_FUND_SIZE} from '../constants';

export default {
  namespace: 'search',
  state: {
    keyword: null,
    order: 'code',
    page: 1,
    totalCount: 0,
    result: []
  },
  reducers: {
    saveKeyword(state, {payload: keyword}) {
      return {
        ...state,
        keyword,
      }
    },
    saveOrder(state, {payload: order}) {
      return {
        ...state,
        order,
      }
    },
    savePage(state, {payload: page}) {
      return {
        ...state,
        page,
      }
    },
    saveTotalCount(state, {payload: totalCount}) {
      return {
        ...state,
        totalCount,
      }
    },
    saveResult(state, {payload: result}) {

      result.forEach(fund => {

        let m = '';
        fund.manager.forEach(manager => m = m + manager.name + ' ');
        fund.key = fund.code;
        fund.manager = m;
      });
      return {
        ...state,
        result,
      }
    },
  },
  effects: {
    *changeOrder({payload: order}, {put}) {
      yield put({
        type: 'saveOrder',
        payload: order
      });

      yield put({
        type: 'fetchFundsByKeyword'
      })
    },
    *changePage({payload: page}, {put}) {
      yield put({
        type: 'savePage',
        payload: page
      });

      yield put({
        type: 'fetchFundsByKeyword'
      })
    },
    fetchFundsByKeyword: [
      function*(action, {call, put, select}) {

        const {keyword, order, page} = yield select(state => state.search);
        console.log(keyword, order)
        const {data} = yield call(searchService.search, keyword, order, SEARCH_FUND_SIZE, page);

        console.log(data);

        yield put({
          type: 'saveResult',
          payload: data.result
        });

        yield put({
          type: 'saveTotalCount',
          payload: data.totalCount
        });
      },
      {type: 'takeLatest'}
    ],
  },
  subscriptions: {},
};
