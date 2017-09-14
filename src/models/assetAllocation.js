/**
 * Created by wyj on 2017/9/11.
 */
import * as assetAllocationService from '../services/assetAllocation';

export default {

  namespace: 'asset',

  state: {
    assetChoiceList: [],
    factorChoiceList: [],
    combinationResult: '',
    fundList: []
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname === 'asset') {
          dispatch({type: 'fetchAssetChoice', payload: query});
          dispatch({type: 'fetchFactorChoice', payload: query});
          dispatch({type: 'createCombination', payload: query});
        }
      });
    },
  },

  effects: {
    *fetchAssetChoice({payload: data}, {call, put}) {

      console.log(data);

      const result = yield call(assetAllocationService.getDataList, data);

      let mockList = [
        {
          name: 'stock',
          funds: [
            {
              value: 123,
              label: '123',
            },
            {
              value: 124,
              label: '124',
            },
          ],
        },
        {
          name: 'bond',
          funds: [
            {
              value: 123,
              label: '123',
            },
            {
              value: 124,
              label: '124',
            },
          ],
        },
        {
          name: 'hybrid',
          funds: [
            {
              value: 123,
              label: '123',
            },
            {
              value: 124,
              label: '124',
            },
          ],
        }
      ];

      yield put({
        type: 'saveAsset',
        payload: mockList,
      });
      yield put({
        type: 'saveFundList',
        payload: [
          {
            name:"stock",
            funds: []
          },
          {
            name:"bond",
            funds: []
          },
          {
            name:"hybrid",
            funds: []
          },
        ],
      });
    },
    *fetchFactorChoice({payload: data}, {call, put, select}) {
      console.log(data);

      const {user} = yield select(state => state.user)
      console.log(localStorage.getItem('token'))

      const result = yield call(assetAllocationService.getDataList, data);

      console.log(result);

      let mockList = [
        {
          name: '因子1',
          funds: [
            {
              code: 123,
              name: '123',
            },
            {
              code: 124,
              name: '124',
            },
          ],
        },
        {
          name: '因子2',
          funds: [
            {
              code: 123,
              name: '123',
            },
            {
              code: 124,
              name: '124',
            },
          ],
        },
        {
          name: '因子3',
          funds: [
            {
              code: 123,
              name: '123',
            },
            {
              code: 124,
              name: '124',
            },
          ],
        },
        {
          name: '因子4',
          funds: [
            {
              code: 123,
              name: '123',
            },
            {
              code: 124,
              name: '124',
            },
          ],
        }
      ];
      yield put({
        type: 'saveFactor',
        payload: mockList
      });

      yield put({
        type: 'saveFundList',
        payload: mockList.map(factor => {
          return {
            name: factor.name,
            funds: factor.funds.map(fund => fund.code)
          }
        }),
      });
    },
    *createCombination({payload: data}, {call, put}) {
      const result = yield call(assetAllocationService.createCombination, data);
      yield put({
        type: 'saveCreateCombination',
        payload: {
          combinationResult: 1,
        },
      });
    },
  },

  reducers: {
    saveAsset(state, {payload: assetChoiceList}) {
      return {...state, assetChoiceList};
    },
    saveFactor(state, {payload: factorChoiceList}) {
      return {...state, factorChoiceList};
    },
    saveCreateCombination(state, {payload: combinationResult}) {
      return {...state, combinationResult};
    },
    saveFundList(state, {payload: fundList}) {
      return {...state, fundList};
    }
  },

};
