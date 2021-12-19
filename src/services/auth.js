import decode from 'jwt-decode'
import axios from 'axios'
import store from  '../store'

export function logoutUser() {
  store.dispatch("setToken", "")
  store.dispatch("setUser", {})
  window.localStorage.removeItem("jwt")
  window.localStorage.removeItem("user")
}

export function setToken(token) {
  //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  store.dispatch("setToken", { token })
}

export function setUser(user){
  store.dispatch("setUser", { user })
}

export function getToken() {
  return store.getters.getToken
}

export function isLoggedIn() {
  let token = getToken()
  return !!token 
}

// && !isTokenExpired(token)

export function getUserInfo() {
  if (isLoggedIn()){
    return decode(store.getters.getToken).result
  }
}

function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}

function getTokenExpirationDate(encodedtoken){
  let token = decode(encodedtoken)
  if(!token.exp) {
    return null
  }

  let date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}