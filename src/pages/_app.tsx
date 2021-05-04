import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from 'Context/Reduces/Auth'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import '../../node_modules/react-back-to-top/dist/BackToTop.css'
import 'react-toastify/dist/ReactToastify.css'
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clube da Catira</title>
        <link rel="shortcut icon" href="/img/catira-icon-72x72.png" />
        <link rel="apple-touch-icon" href="/img/catira-icon-72x72.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="Clube da catira"
          content="Uma solução criativa e econômica Gerando relacionamentos para você transformá-los em negócios"
        />
      </Head>
      <GlobalStyles />

      <ToastContainer autoClose={5000} />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
