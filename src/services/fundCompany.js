/**
 * Created by st on 2017/9/9.
 */
import request from '../utils/request';

export function fetchCompanyId(code) {
  return request(`/api/fund/${code}/company`, {
    method: 'GET',
  });
}

export function fetchCompanyFundPerformance(companyId) {
  return request(`/api/company/${companyId}/fund-performance`, {
    method: 'GET',
  });
}

export function fetchCompanyManagerPerformance(companyId) {
  return request(`/api/company/${companyId}/manager-performance`, {
    method: 'GET',
  });
}

export function fetchCompanyProductStrategy(companyId) {
  return request(`/api/company/${companyId}/product-strategy`, {
    method: 'GET',
  });
}

export function fetchCompanyAssetAllocation(companyId) {
  return request(`/api/company/${companyId}/asset-allocation`, {
    method: 'GET',
  });
}

export function fetchCompanyStyleAttributionProfit(companyId) {
  return request(`/api/company/${companyId}/style-attribution/profit`, {
    method: 'GET',
  });
}

export function fetchCompanyStyleAttributionRisk(companyId) {
  return request(`/api/company/${companyId}/style-attribution/risk`, {
    method: 'GET',
  });
}

export function fetchCompanyIndustryAttributionProfit(companyId) {
  return request(`/api/company/${companyId}/industry-attribution/profit`, {
    method: 'GET',
  });
}

export function fetchCompanyIndustryAttributionRisk(companyId) {
  return request(`/api/company/${companyId}/industry-attribution/risk`, {
    method: 'GET',
  });
}
