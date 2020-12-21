// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    backendUrl: 'http://192.168.1.104:3334/'
  }
}
