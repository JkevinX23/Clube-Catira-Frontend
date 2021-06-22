/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: 'https://svr.aliancadescontos.com/'
  }
}
module.exports = {
  images: {
    domains: [
      '192.168.1.104',
      'svr.rededetrocas.com',
      'svr.aliancadescontos.com'
    ]
  }
}
