import Cookies from 'js-cookie'

/*const TokenKey = 'Admin-Token'*/
const TokenKey='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTk5MjkwODUyLCJleHAiOjE1OTkyOTQ0NTJ9.KoVwHSfHnisvMuRd54wVZQ7tkiU-HLB0zmwiBlqMuu7y_WM74PND6IET98lp1VnOcyG2CaKdjC6JUSNR1lSvVg'

export function getToken() {
  return TokenKey
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
