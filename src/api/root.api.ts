import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'base url',
      timeout: 7000, // time out reqest fails
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
const http = new Http().instance

export default http