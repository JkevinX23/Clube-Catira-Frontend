import axios from 'axios'
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()

const instance = axios.create({
  baseURL: 'http://localhost:3334/'
  // baseURL: 'https://svr.rededetrocas.com/'
})

export default instance
