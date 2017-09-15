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
    *fetchAssetChoice({payload: body}, {call, put}) {

      // console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);

      yield put({
        type: 'saveAsset',
        payload: data,
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

    *fetchFactorChoice({payload: body}, {call, put}) {
      // console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);

      yield put({
        type: 'saveFactor',
        payload: data
      });

      yield put({
        type: 'saveFundList',
        payload: data.map(factor => {
          return {
            name: factor.name,
            funds: factor.funds
          }
        }),
      });
    },
    *createCombination({payload: body}, {call, put, select}) {

      const {fundList:funds} = yield select(state => state.asset);
      body.funds = funds.map(c => {
        return {
          name: c.name,
          codes: c.funds.map(fund => fund.code)
        }
      });

      console.log(body)
      const {data} = yield call(assetAllocationService.createCombination, body);
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
    },
    saveFundToFundList(state, {payload: {name, value}}) {
      let category = state.fundList.filter(c => c.name === name);
      if (category.length === 1) {
        category = category[0];

        console.log(category)

        category.funds = value;


        return {
          ...state,
          fundList: [
            ...state.fundList,
            ...category,
          ]
        };
      }
      return state;
    }
  },

};
