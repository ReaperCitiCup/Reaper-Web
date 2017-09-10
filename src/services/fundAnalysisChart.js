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

export function fetchFundInterestRateCurveVariety(code) {
  return request(`/api/fund/${code}/interest-rate-curve/variety`, {
    method: 'GET',
  });
}
