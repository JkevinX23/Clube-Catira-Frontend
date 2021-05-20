import axios from 'axios'
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()

const instance = axios.create({
  // baseURL: 'http://localhost:3334/'
  //baseURL: 'http://162.214.144.130'
  // baseURL: 'https://svr.rededetrocas.com'
  baseURL: 'https://svr.aliancadescontos.com'
})

instance.interceptors.request.use((config) => {
  if (process.browser) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export default instance
