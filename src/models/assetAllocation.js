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
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === 'asset') {
          dispatch({ type: 'fetchAssetChoice', payload: query });
          dispatch({ type: 'fetchFactorChoice', payload: query });
          dispatch({ type: 'createCombination', payload: query });
        }
      });
    },
  },

  effects: {
    *fetchAssetChoice({ payload: data }, { call, put }) {
      const result = yield call(assetAllocationService.getDataList, data);
      yield put({
        type: 'saveAsset',
        payload: {
          assetChoiceList: [{
            name: '股票型基金',
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
          }, {
            name: '债券型基金',
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
          }, {
            name: '混合型基金',
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
          }],
        },
      });
    },
    *fetchFactorChoice({ payload: data }, { call, put }) {
      const result = yield call(assetAllocationService.getDataList, data);
      yield put({
        type: 'saveFactor',
        payload: {
          factorChoiceList: [{
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
          }, {
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
          }, {
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
          }],
        },
      });
    },
    *createCombination({ payload: data }, { call, put }) {
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
    saveAsset(state, { payload: assetChoiceList }) {
      return { ...state, assetChoiceList };
    },
    saveFactor(state, { payload: factorChoiceList }) {
      return { ...state, factorChoiceList };
    },
    saveCreateCombination(state, { payload: combinationResult }) {
      return { ...state, combinationResult };
    },
  },

};
