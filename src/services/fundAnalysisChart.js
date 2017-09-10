/**
 * Created by st on 2017/9/10.
 */
import request from '../utils/request';

export function fetchFundRiskTrend(code) {
  return request(`/api/fund/${code}/risk-trend`, {
    method: 'GET',
  });
}

export function fetchFundDailyRetracement(code) {
  return request(`/api/fund/${code}/daily-retracement`, {
    method: 'GET',
  });
}

export function fetchFundVolatility(code) {
  return request(`/api/fund/${code}/volatility`, {
    method: 'GET',
  });
}

export function fetchFundValueAtRisk(code) {
  return request(`/api/fund/${code}/value-at-risk`, {
    method: 'GET',
  });
}

export function fetchFundDownsideVolatility(code) {
  return request(`/api/fund/${code}/downside-volatility`, {
    method: 'GET',
  });
}

export function fetchFundSharpeIndex(code) {
  return request(`/api/fund/${code}/sharpe-index`, {
    method: 'GET',
  });
}

export function fetchFundTreynorIndex(code) {
  return request(`/api/fund/${code}/treynor-index`, {
    method: 'GET',
  });
}

export function fetchFundJensenIndex(code) {
  return request(`/api/fund/${code}/jensen-index`, {
    method: 'GET',
  });
}

export function fetchFundInformationRatio(code) {
  return request(`/api/fund/${code}/information-ratio`, {
    method: 'GET',
  });
}

export function fetchFundStyleAttributionProfit(code) {
  return request(`/api/fund/${code}/style-attribution/profit`, {
    method: 'GET',
  });
}

export function fetchFundStyleAttributionRisk(code) {
  return request(`/api/fund/${code}/style-attribution/risk`, {
    method: 'GET',
  });
}

export function fetchFundIndustryAttributionProfit(code) {
  return request(`/api/fund/${code}/industry-attribution/profit`, {
    method: 'GET',
  });
}

export function fetchFundIndustryAttributionRisk(code) {
  return request(`/api/fund/${code}/industry-attribution/risk`, {
    method: 'GET',
  });
}

export function fetchFundStyleStabilityProfit(code) {
  return request(`/api/fund/${code}/style-stability/profit`, {
    method: 'GET',
  });
}

export function fetchFundStyleStabilityRisk(code) {
  return request(`/api/fund/${code}/style-stability/risk`, {
    method: 'GET',
  });
}

export function fetchFundVarietyAttribution(code) {
  return request(`/api/fund/${code}/variety-attribution`, {
    method: 'GET',
  });
}

export function fetchFundBrisonAttributionStock(code) {
  return request(`/api/fund/${code}/brison-attribution/stock`, {
    method: 'GET',
  });
}

export function fetchFundBrisonAttributionBond(code) {
  return request(`/api/fund/${code}/brison-attribution/bond`, {
    method: 'GET',
  });
}

export function fetchFundChooseTime(code) {
  return request(`/api/fund/${code}/choose-time`, {
    method: 'GET',
  });
}

export function fetchFundChooseStock(code) {
  return request(`/api/fund/${code}/choose-stock`, {
    method: 'GET',
  });
}

export function fetchFundPublicOpinion(code) {
  return request(`/api/fund/${code}/public-opinion`, {
    method: 'GET',
  });
}

export function fetchFundPerformanceAnalysis(code) {
  return request(`/api/fund/${code}/fund-performance`, {
    method: 'GET',
  });
}

export function fetchManagerPerformanceAnalysis(code) {
  return request(`/api/fund/${code}/manager-performance`, {
    method: 'GET',
  });
}
