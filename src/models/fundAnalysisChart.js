/**
 * Created by st on 2017/9/10.
 */
import * as fundAnalysisChartService from '../services/fundAnalysisChart'
export default {
  namespace: 'fundAnalysisChart',
  state: {
    // fundRiskTrend: null,
    // fundDailyRetracement: null,
    fundVolatility: null,
    fundValueAtRisk: null,
    fundDownsideVolatility: null,
    fundSharpeIndex: null,
    fundTreynorIndex: null,
    fundJensenIndex: null,
    // fundInformationRatio: null,
    fundStyleAttributionProfit: null,
    fundStyleAttributionRisk: null,
    fundIndustryAttributionProfit: null,
    fundIndustryAttributionRisk: null,
    fundStyleStabilityProfit: null,
    fundStyleStabilityRisk: null,
    fundVarietyAttribution: null,
    fundBrisonAttributionStock: null,
    fundBrisonAttributionBond: null,
    fundChooseTimeStock: null,
    fundPerformanceAnalysis: null,
    managerPerformanceAnalysis: null,
    fundPublicOpinion: null,
    fundPerformanceIndex: null,
    fundPositionNetwork: null,
  },
  reducers: {
    // saveFundRiskTrend(state, {payload: fundRiskTrend}) {
    //   return {
    //     ...state,
    //     fundRiskTrend,
    //   }
    // },

    // saveFundDailyRetracement(state, {payload: fundDailyRetracement}) {
    //   return {
    //     ...state,
    //     fundDailyRetracement,
    //   }
    // },

    saveFundVolatility(state, {payload: fundVolatility}) {
      return {
        ...state,
        fundVolatility,
      }
    },

    saveFundValueAtRisk(state, {payload: fundValueAtRisk}) {
      return {
        ...state,
        fundValueAtRisk,
      }
    },

    saveFundDownsideVolatility(state, {payload: fundDownsideVolatility}) {
      return {
        ...state,
        fundDownsideVolatility,
      }
    },

    saveFundSharpeIndex(state, {payload: fundSharpeIndex}) {
      return {
        ...state,
        fundSharpeIndex,
      }
    },

    saveFundTreynorIndex(state, {payload: fundTreynorIndex}) {
      return {
        ...state,
        fundTreynorIndex,
      }
    },

    saveFundJensenIndex(state, {payload: fundJensenIndex}) {
      return {
        ...state,
        fundJensenIndex,
      }
    },

    // saveFundInformationRatio(state, {payload: fundInformationRatio}) {
    //   return {
    //     ...state,
    //     fundInformationRatio,
    //   }
    // },

    saveFundStyleAttributionProfit(state, {payload: fundStyleAttributionProfit}) {
      return {
        ...state,
        fundStyleAttributionProfit,
      }
    },

    saveFundStyleAttributionRisk(state, {payload: fundStyleAttributionRisk}) {
      return {
        ...state,
        fundStyleAttributionRisk,
      }
    },

    saveFundIndustryAttributionProfit(state, {payload: fundIndustryAttributionProfit}) {
      return {
        ...state,
        fundIndustryAttributionProfit,
      }
    },

    saveFundIndustryAttributionRisk(state, {payload: fundIndustryAttributionRisk}) {
      return {
        ...state,
        fundIndustryAttributionRisk,
      }
    },

    saveFundStyleStabilityProfit(state, {payload: fundStyleStabilityProfit}) {
      return {
        ...state,
        fundStyleStabilityProfit,
      }
    },

    saveFundStyleStabilityRisk(state, {payload: fundStyleStabilityRisk}) {
      return {
        ...state,
        fundStyleStabilityRisk,
      }
    },

    saveFundVarietyAttribution(state, {payload: fundVarietyAttribution}) {
      return {
        ...state,
        fundVarietyAttribution,
      }
    },

    saveFundBrisonAttributionStock(state, {payload: fundBrisonAttributionStock}) {
      return {
        ...state,
        fundBrisonAttributionStock,
      }
    },

    saveFundBrisonAttributionBond(state, {payload: fundBrisonAttributionBond}) {
      return {
        ...state,
        fundBrisonAttributionBond,
      }
    },

    saveFundChooseTimeStock(state, {payload: fundChooseTimeStock}) {
      return {
        ...state,
        fundChooseTimeStock,
      }
    },

    saveFundPerformanceAnalysis(state, {payload: fundPerformanceAnalysis}) {
      return {
        ...state,
        fundPerformanceAnalysis,
      }
    },

    saveManagerPerformanceAnalysis(state, {payload: managerPerformanceAnalysis}) {
      return {
        ...state,
        managerPerformanceAnalysis,
      }
    },

    saveFundPublicOpinion(state, {payload: fundPublicOpinion}) {
      return {
        ...state,
        fundPublicOpinion,
      }
    },

    saveFundPerformanceIndex(state, {payload: fundPerformanceIndex}) {
      return {
        ...state,
        fundPerformanceIndex,
      }
    },

    saveFundPositionNetwork(state, {payload: fundPositionNetwork}) {
      return {
        ...state,
        fundPositionNetwork,
      }
    },

  },
  effects: {
    // *fetchFundRiskTrend({payload: code}, {call, put, select}) {
    //   yield put({
    //     type: 'saveFundRiskTrend',
    //     payload: null,
    //   });
    //
    //   const {data} = yield call(fundAnalysisChartService.fetchFundRiskTrend, code);
    //
    //   // console.log(data);
    //
    //   yield put({
    //     type: 'saveFundRiskTrend',
    //     payload: data
    //   });
    // },

    // *fetchFundDailyRetracement({payload: code}, {call, put, select}) {
    //   yield put({
    //     type: 'saveFundDailyRetracement',
    //     payload: null,
    //   });
    //
    //   const {data} = yield call(fundAnalysisChartService.fetchFundDailyRetracement, code);
    //
    //   // console.log(data);
    //
    //   yield put({
    //     type: 'saveFundDailyRetracement',
    //     payload: data
    //   });
    // },

    *fetchFundVolatility({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundVolatility',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundVolatility, code);

      // console.log(data);

      yield put({
        type: 'saveFundVolatility',
        payload: data
      });
    },

    *fetchFundValueAtRisk({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundValueAtRisk',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundValueAtRisk, code);

      // console.log(data);

      yield put({
        type: 'saveFundValueAtRisk',
        payload: data
      });
    },

    *fetchFundDownsideVolatility({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundDownsideVolatility',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundDownsideVolatility, code);

      // console.log(data);

      yield put({
        type: 'saveFundDownsideVolatility',
        payload: data
      });
    },

    *fetchFundSharpeIndex({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundSharpeIndex',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundSharpeIndex, code);

      // console.log(data);

      yield put({
        type: 'saveFundSharpeIndex',
        payload: data
      });
    },

    *fetchFundTreynorIndex({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundTreynorIndex',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundTreynorIndex, code);

      // console.log(data);

      yield put({
        type: 'saveFundTreynorIndex',
        payload: data
      });
    },

    *fetchFundJensenIndex({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundJensenIndex',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundJensenIndex, code);

      // console.log(data);

      yield put({
        type: 'saveFundJensenIndex',
        payload: data
      });
    },

    // *fetchFundInformationRatio({payload: code}, {call, put, select}) {
    //   yield put({
    //     type: 'saveFundInformationRatio',
    //     payload: null,
    //   });
    //
    //   const {data} = yield call(fundAnalysisChartService.fetchFundInformationRatio, code);
    //
    //   // console.log(data);
    //
    //   yield put({
    //     type: 'saveFundInformationRatio',
    //     payload: data
    //   });
    // },

    *fetchFundStyleAttributionProfit({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundStyleAttributionProfit',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundStyleAttributionProfit, code);

      // console.log(data);

      yield put({
        type: 'saveFundStyleAttributionProfit',
        payload: data
      });
    },

    *fetchFundStyleAttributionRisk({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundStyleAttributionRisk',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundStyleAttributionRisk, code);

      // console.log(data);

      yield put({
        type: 'saveFundStyleAttributionRisk',
        payload: data
      });
    },

    *fetchFundIndustryAttributionProfit({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundIndustryAttributionProfit',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundIndustryAttributionProfit, code);

      // console.log(data);

      yield put({
        type: 'saveFundIndustryAttributionProfit',
        payload: data
      });
    },

    *fetchFundIndustryAttributionRisk({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundIndustryAttributionRisk',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundIndustryAttributionRisk, code);

      // console.log(data);

      yield put({
        type: 'saveFundIndustryAttributionRisk',
        payload: data
      });
    },

    *fetchFundStyleStabilityProfit({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundStyleStabilityProfit',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundStyleStabilityProfit, code);

      // console.log(data);

      yield put({
        type: 'saveFundStyleStabilityProfit',
        payload: data
      });
    },

    *fetchFundStyleStabilityRisk({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundStyleStabilityRisk',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundStyleStabilityRisk, code);

      // console.log(data);

      yield put({
        type: 'saveFundStyleStabilityRisk',
        payload: data
      });
    },

    *fetchFundVarietyAttribution({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundVarietyAttribution',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundVarietyAttribution, code);

      // console.log(data);

      yield put({
        type: 'saveFundVarietyAttribution',
        payload: data
      });
    },

    *fetchFundBrisonAttributionStock({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundBrisonAttributionStock',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundBrisonAttributionStock, code);

      // console.log(data);

      yield put({
        type: 'saveFundBrisonAttributionStock',
        payload: data
      });
    },

    *fetchFundBrisonAttributionBond({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundBrisonAttributionBond',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundBrisonAttributionBond, code);

      // console.log(data);

      yield put({
        type: 'saveFundBrisonAttributionBond',
        payload: data
      });
    },

    *fetchFundChooseTimeStock({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundChooseTimeStock',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundChooseTimeStock, code);

      // console.log(data);

      yield put({
        type: 'saveFundChooseTimeStock',
        payload: data
      });
    },

    *fetchFundPerformanceAnalysis({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundPerformanceAnalysis',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundPerformanceAnalysis, code);

      // console.log(data);

      yield put({
        type: 'saveFundPerformanceAnalysis',
        payload: data
      });
    },

    *fetchManagerPerformanceAnalysis({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveManagerPerformanceAnalysis',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchManagerPerformanceAnalysis, code);

      // console.log(data);

      yield put({
        type: 'saveManagerPerformanceAnalysis',
        payload: data
      });
    },

    *fetchFundPublicOpinion({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundPublicOpinion',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundPublicOpinion, code);

      // console.log(data);

      yield put({
        type: 'saveFundPublicOpinion',
        payload: data
      });
    },

    *fetchFundPerformanceIndex({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundPerformanceIndex',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundPerformanceIndex, code);

      // console.log(data);

      yield put({
        type: 'saveFundPerformanceIndex',
        payload: data
      });
    },

    *fetchFundPositionNetwork({payload: code}, {call, put, select}) {
      yield put({
        type: 'saveFundPositionNetwork',
        payload: null,
      });

      const {data} = yield call(fundAnalysisChartService.fetchFundPositionNetwork, code);

      // console.log(data);

      yield put({
        type: 'saveFundPositionNetwork',
        payload: data
      });
    },

  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        let path = pathname.split('/');
        // console.log(path);
        if (path.indexOf('fund') === 1 && path.indexOf('analysis') === 3 && path.length === 4) {
          let id = path[2];
          // console.log("-------id: "+id);
          // window.scrollTo(0, 0);
          dispatch({type: 'fund/fetchFundBrief', payload: id});
          dispatch({type: 'fundCompany/fetchCompanyId', payload: id});
          dispatch({type: 'fundChart/fetchCumulativeProfitData', payload: 1});
          dispatch({type: 'fundChart/fetchUnitNetValueData', payload: id});
          // dispatch({type: 'fetchFundRiskTrend', payload: id});
          // dispatch({type: 'fetchFundDailyRetracement', payload: id});
          dispatch({type: 'fetchFundVolatility', payload: id});
          dispatch({type: 'fetchFundValueAtRisk', payload: id});
          dispatch({type: 'fetchFundDownsideVolatility', payload: id});
          dispatch({type: 'fetchFundSharpeIndex', payload: id});
          dispatch({type: 'fetchFundTreynorIndex', payload: id});
          dispatch({type: 'fetchFundJensenIndex', payload: id});
          // dispatch({type: 'fetchFundInformationRatio', payload: id});
          dispatch({type: 'fetchFundStyleAttributionProfit', payload: id});
          dispatch({type: 'fetchFundStyleAttributionRisk', payload: id});
          dispatch({type: 'fetchFundIndustryAttributionProfit', payload: id});
          dispatch({type: 'fetchFundIndustryAttributionRisk', payload: id});
          dispatch({type: 'fetchFundStyleStabilityProfit', payload: id});
          dispatch({type: 'fetchFundStyleStabilityRisk', payload: id});
          dispatch({type: 'fetchFundVarietyAttribution', payload: id});
          dispatch({type: 'fetchFundBrisonAttributionStock', payload: id});
          dispatch({type: 'fetchFundBrisonAttributionBond', payload: id});
          dispatch({type: 'fetchFundChooseTimeStock', payload: id});
          dispatch({type: 'fetchFundPerformanceAnalysis', payload: id});
          dispatch({type: 'fetchManagerPerformanceAnalysis', payload: id});
          dispatch({type: 'fetchFundPublicOpinion', payload: id});
          dispatch({type: 'fetchFundPerformanceIndex', payload: id});
          dispatch({type: 'fetchFundPositionNetwork', payload: id});
        }
      });
    },
  },
};
