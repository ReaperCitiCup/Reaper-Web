/**
 * Created by st on 2017/9/8.
 */
import request from '../utils/request';

export function fetchFundManagerInfo(managerId) {
  return request(`/api/manager/${managerId}`, {
    method: 'GET',
  });
}

export function fetchFundManagerAbility(managerId) {
  return request(`/api/manager/${managerId}/ability`, {
    method: 'GET',
  });
}

export function fetchFundManagerFunds(managerId) {
  return request(`/api/manager/${managerId}/funds`, {
    method: 'GET',
  });
}

export function fetchFundManagerFundRank(managerId) {
  return request(`/api/manager/${managerId}/fund-rank`, {
    method: 'GET',
  });
}

export function fetchFundManagerFundReturns(managerId) {
  return request(`/api/manager/${managerId}/fund-returns`, {
    method: 'GET',
  });
}

export function fetchFundManagerFundRateTrend(managerId) {
  return request(`/api/manager/${managerId}/fund-rate-trend`, {
    method: 'GET',
  });
}

export function fetchFundManagerFundRankTrend(managerId) {
  return request(`/api/manager/${managerId}/fund-rank-trend`, {
    method: 'GET',
  });
}

export function fetchFundManagerFundPerformance(managerId) {
  return request(`/api/manager/${managerId}/fund-performance`, {
    method: 'GET',
  });
}

export function fetchFundManagerPerformance(managerId) {
  return request(`/api/manager/${managerId}/manager-performance`, {
    method: 'GET',
  });
}

export function fetchFundManagerSocialNetwork(managerId) {
  return request(`/api/manager/${managerId}/social-network`, {
    method: 'GET',
  });
}
