import axios from 'axios'

export default {
  login(credenciales) {
    return axios.post('users/login', credenciales)
    .then(response => response.data)
  },

  getUser(userID) {
    return axios.get('users/get/' + userID)
    .then(response => response.data)
    .catch(err => err.data)
  }
}