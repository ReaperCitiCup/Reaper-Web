/**
 * Created by st on 2017/9/9.
 */
import * as fundCompanyService from '../services/fundCompany';
export default {
  namespace: 'fundCompany',
  state: {
    companyId: null,
    companyName: null,
    fundPerformance: null,
    managerPerformance: null,
    productStrategy: null,
    assetAllocation: null,
    styleAttributionProfit: null,
    styleAttributionRisk: null,
    industryAttributionProfit: null,
    industryAttributionRisk: null,
  },
  reducers: {
    saveCompanyId(state, {payload: companyId}) {
      return {
        ...state,
        companyId,
      }
    },

    saveCompanyName(state, {payload: companyName}) {
      return {
        ...state,
        companyName,
      }
    },

    saveFundPerformance(state, {payload: fundPerformance}) {
      return {
        ...state,
        fundPerformance,
      }
    },

    saveManagerPerformance(state, {payload: managerPerformance}) {
      return {
        ...state,
        managerPerformance,
      }
    },

    saveProductStrategy(state, {payload: productStrategy}) {
      return {
        ...state,
        productStrategy,
      }
    },

    saveAssetAllocation(state, {payload: assetAllocation}) {
      return {
        ...state,
        assetAllocation,
      }
    },

    saveStyleAttributionProfit(state, {payload: styleAttributionProfit}) {
      return {
        ...state,
        styleAttributionProfit,
      }
    },

    saveStyleAttributionRisk(state, {payload: styleAttributionRisk}) {
      return {
        ...state,
        styleAttributionRisk,
      }
    },

    saveIndustryAttributionProfit(state, {payload: industryAttributionProfit}) {
      return {
        ...state,
        industryAttributionProfit,
      }
    },

    saveIndustryAttributionRisk(state, {payload: industryAttributionRisk}) {
      return {
        ...state,
        industryAttributionRisk,
      }
    },

  },
  effects: {
    *fetchCompanyBrief({payload: fundCode, onSuccess}, {call, put, select}) {

      const {data} = yield call(fundCompanyService.fetchCompanyBrief, fundCode);

      // console.log(data);

      yield put({
        type: 'saveCompanyId',
        payload: data.id,
      });

      yield put({
        type: 'saveCompanyName',
        payload: data.name,
      });

      if (onSuccess)
        onSuccess();
    },

    *fetchFundPerformance(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      // console.log("!!!!!!!!!" + companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyFundPerformance, companyId);

      // console.log(data);

      yield put({
        type: 'saveFundPerformance',
        payload: data,
      })
    },

    *fetchManagerPerformance(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyManagerPerformance, companyId);

      console.log(data);

      yield put({
        type: 'saveManagerPerformance',
        payload: data,
      })
    },

    // *fetchProductStrategy(action, {call, put, select}) {
    //
    //   const companyId = yield select(state => state.fundCompany.companyId);
    //
    //   const {data} = yield call(fundCompanyService.fetchCompanyProductStrategy, companyId);
    //
    //   // console.log(data);
    //
    //   yield put({
    //     type: 'saveProductStrategy',
    //     payload: data,
    //   })
    // },

    *fetchAssetAllocation(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyAssetAllocation, companyId);

      // console.log(data);

      yield put({
        type: 'saveAssetAllocation',
        payload: data,
      })
    },

    *fetchStyleAttributionProfit(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyStyleAttributionProfit, companyId);

      // console.log(data);

      yield put({
        type: 'saveStyleAttributionProfit',
        payload: data,
      })
    },

    *fetchStyleAttributionRisk(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyStyleAttributionRisk, companyId);

      // console.log(data);

      yield put({
        type: 'saveStyleAttributionRisk',
        payload: data,
      })
    },

    *fetchIndustryAttributionProfit(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyIndustryAttributionProfit, companyId);

      // console.log(data);

      yield put({
        type: 'saveIndustryAttributionProfit',
        payload: data,
      })
    },

    *fetchIndustryAttributionRisk(action, {call, put, select}) {

      const companyId = yield select(state => state.fundCompany.companyId);

      const {data} = yield call(fundCompanyService.fetchCompanyIndustryAttributionRisk, companyId);

      // console.log(data);

      yield put({
        type: 'saveIndustryAttributionRisk',
        payload: data,
      })
    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        let path = pathname.split('/');
        // console.log(path);
        if (path.indexOf('fund') === 1 && path.indexOf('company') === 3 && path.length === 4) {
          let id = path[2];
          // console.log("-------id: "+id);
          // window.scrollTo(0, 0);
          dispatch({
            type: 'fetchCompanyBrief',
            payload: id,
            onSuccess: () => {
              dispatch({type: 'fetchFundPerformance'});
              dispatch({type: 'fetchManagerPerformance'});
              // dispatch({type: 'fetchProductStrategy'});
              dispatch({type: 'fetchAssetAllocation'});
              dispatch({type: 'fetchStyleAttributionProfit'});
              dispatch({type: 'fetchStyleAttributionRisk'});
              dispatch({type: 'fetchIndustryAttributionProfit'});
              dispatch({type: 'fetchIndustryAttributionRisk'});
            }
          });

        }
      });
    },
  },
};
