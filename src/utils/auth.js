import Cookies from 'js-cookie'

/*const TokenKey = 'Admin-Token'*/
const TokenKey='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk5MjgzNTgwLCJleHAiOjE1OTkyODcxODB9.dVwUgi2ZmsR_L6YE2VdkOd8uYlMYbXq_oKtdBKcVbrBOt7XsoQclf_0gKFcO5D8RY674w4N58UM_ci3vxu2byw'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
