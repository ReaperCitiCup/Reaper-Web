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
