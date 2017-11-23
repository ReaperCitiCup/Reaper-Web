/**
 * Created by wyj on 2017/9/11.
 */
import * as assetAllocationService from '../services/assetAllocation';
import {routerRedux} from 'dva/router';


export default {

  namespace: 'asset',

  state: {
    assetChoiceList: [],
    factorChoiceList: [],
    barraChoiceList: [],
    netChoiceList: [],
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
    * fetchAssetChoice({payload: body}, {call, put}) {

      console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);

      console.log(data)
      yield put({
        type: 'saveAsset',
        payload: data,
      });
      yield put({
        type: 'saveFundList',
        payload: [
          {
            category: "stock",
            codes: []
          },
          {
            category: "bond",
            codes: []
          },
          {
            category: "hybrid",
            codes: []
          },
        ],
      });
    },

    * fetchFactorChoice({payload: body}, {call, put}) {
      console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);

      console.log(data)
      yield put({
        type: 'saveFactor',
        payload: data
      });

      yield put({
        type: 'saveFundList',
        payload: data.map(factor => {
          return {
            category: factor.name,
            codes: factor.funds.map(fund => fund.code)
          }
        }),
      });
    },
    * fetchBarraChoice({payload: body}, {call, put}) {
      console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);
      console.log(data)
      yield put({
        type: 'saveBarra',
        payload: data.length > 0 ? data[0].funds : []
      });
      yield put({
        type: 'saveFundList',
        payload: data.map(factor => {
          return {
            category: factor.name,
            codes: factor.funds.map(fund => fund.code)
          }
        }),
      });
    },
    * fetchNetChoice({payload: body}, {call, put}) {
      console.log(body);

      const {data} = yield call(assetAllocationService.getDataList, body);

      console.log(data)
      yield put({
        type: 'saveNet',
        payload: data
      });

      yield put({
        type: 'saveFundList',
        payload: data.map(factor => {
          return {
            category: factor.name,
            codes: []
          }
        }),
      });
    },
    * createCombination({payload: body, onSuccess, onError}, {call, put, select}) {
      console.log(body)

      const {fundList: funds} = yield select(state => state.asset);

      // console.log(funds);
      body.funds = funds;

      // console.log(body);
      const {data} = yield call(assetAllocationService.createCombination, body);

      console.log(data)
      if (data.result) {
        if (onSuccess) onSuccess("创建组合成功");
        yield put(routerRedux.push('/combination'));
      } else {
        if (onError) onError(data.message);
        yield put(routerRedux.push('/asset'));
      }
    },
  },

  reducers: {
    saveAsset(state, {payload: assetChoiceList}) {
      return {...state, assetChoiceList};
    },
    saveFactor(state, {payload: factorChoiceList}) {
      return {...state, factorChoiceList};
    },
    saveBarra(state, {payload: barraChoiceList}) {
      return {...state, barraChoiceList};
    },
    saveNet(state, {payload: netChoiceList}) {
      return {...state, netChoiceList};
    },
    saveCreateCombination(state, {payload: combinationResult}) {
      return {...state, combinationResult};
    },
    saveFundList(state, {payload: fundList}) {
      return {...state, fundList};
    },
    saveFundToFundList(state, {payload: {name, value}}) {
      let category = state.fundList.filter(c => c.category === name);
      if (category.length === 1) {
        category = category[0];
        category.codes = value;

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
