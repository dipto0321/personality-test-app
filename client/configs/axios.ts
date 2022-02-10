import axios from 'axios'

const instance = axios.create({
  baseURL: `${
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:8000/'
      : 'https://n4rr7d.deta.dev/'
  }`
})

export default instance
