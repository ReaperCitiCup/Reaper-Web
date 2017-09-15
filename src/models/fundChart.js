/**
 * Created by st on 2017/9/6.
 */
import * as fundChartService from '../services/fundChart';

export default  {
  namespace: 'fundChart',
  state: {
    unitNetValueData: null,
    cumulativeNetValueData: null,
    cumulativeProfitData: null,
    currentAssetData: null,
    fundManagers: null,
  },
  reducers: {
    drawUnitNetValueChart(state, {payload: unitNetValueData}) {
      return {
        ...state,
        unitNetValueData,
      }
    },

    drawCumulativeNetValueChart(state, {payload: cumulativeNetValueData}) {
      return {
        ...state,
        cumulativeNetValueData,
      }
    },

    drawCumulativeProfitChart(state, {payload: cumulativeProfitData}) {
      return {
        ...state,
        cumulativeProfitData,
      }
    },

    drawCurrentAssetChart(state, {payload: currentAssetData}) {
      return {
        ...state,
        currentAssetData,
      }
    },

    saveFundManagers(state, {payload: fundManagers}) {
      return {
        ...state,
        fundManagers,
      }
    }
  },
  effects: {
    /**
     * 获取基金单位净值走势图的数据
     * @param code 基金代码
     * @param call
     * @param put
     * @param select
     */
      *fetchUnitNetValueData({payload: code}, {call, put, select}) {
      yield put({
        type: 'drawUnitNetValueChart',
        payload: null,
      });

      const {data} = yield call(fundChartService.fetchUnitNetValueData, code);

      // console.log(data);

      yield put({
        type: 'drawUnitNetValueChart',
        payload: data,
      });
    },

    /**
     * 获取基金累计净值走势图的数据
     * @param code 基金代码
     * @param call
     * @param put
     * @param select
     */
      *fetchCumulativeNetValueData({payload: code}, {call, put, select}) {
      yield put({
        type: 'drawCumulativeNetValueChart',
        payload: null,
      });

      const {data} = yield call(fundChartService.fetchCumulativeNetValueData, code);

      // console.log(data);

      yield put({
        type: 'drawCumulativeNetValueChart',
        payload: data,
      });
    },

    /**
     * 获取基金累计收益率走势图的数据
     * @param code 基金代码
     * @param month 月份
     * @param call
     * @param put
     * @param select
     */
      *fetchCumulativeProfitData({payload: month}, {call, put, select}) {
      // yield put({
      //   type: 'drawCumulativeProfitChart',
      //   payload: null,
      // });
      const code = yield  select(state => state.fund.fundBrief.code);

      // console.log(code);

      const {data} = yield call(fundChartService.fetchCumulativeProfitData, code, month);

      // console.log(data);

      yield put({
        type: 'drawCumulativeProfitChart',
        payload: data
      });
    },

    *fetchCurrentAssetData({payload: code}, {call, put, select}) {
      yield put({
        type: 'drawCurrentAssetChart',
        payload: null,
      });

      const {data} = yield call(fundChartService.fetchCurrentAssetData, code);

      // console.log(data);

      yield put({
        type: 'drawCurrentAssetChart',
        payload: data
      });
    },

    *fetchFundManagers({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundManagers',
        payload: null,
      });

      const {data} = yield call(fundChartService.fetchFundManagers, code);

      yield put({
        type: 'saveFundManagers',
        payload: data,
      })
    }

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        // console.log(pathname.split('/'));
        if (pathname.indexOf('/fund/') === 0 && pathname.split('/').length === 3) {
          let id = pathname.split('/fund/')[1];
          window.scrollTo(0, 0);
          dispatch({
            type: 'fund/fetchFundBrief',
            payload: id,
            onSuccess: () => {
              console.log('success')
              dispatch({type: 'fetchUnitNetValueData', payload: id});
              dispatch({type: 'fetchCumulativeNetValueData', payload: id});
              dispatch({type: 'fetchCumulativeProfitData', payload: 1});
              dispatch({type: 'fetchCurrentAssetData', payload: id});
              dispatch({type: 'fetchFundManagers', payload: id});
            }
          });
        }
      });
    },
  },
};
