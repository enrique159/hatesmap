import axios from 'axios'

export default {
  login(credenciales) {
    return axios.post('auth/local', credenciales)
    .then(response => response.data)
    .catch(error => { return error.response.data })
  },
}