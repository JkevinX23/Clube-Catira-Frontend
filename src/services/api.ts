import axios from 'axios'
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()

const instance = axios.create({
  baseURL: 'http://localhost:3334/'
  // baseURL: 'https://svr.rededetrocas.com/'
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    console.log(token)
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default instance
