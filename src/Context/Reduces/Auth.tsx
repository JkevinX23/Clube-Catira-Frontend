/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from 'react'
import { postLogin } from 'Context/Action/Login'
import { Administrador, Login, Franquia, Associate, Consultant } from 'Types'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { getCredits } from 'Context/Action/Associates'
interface IAuthContext {
  signed: boolean
  option: number
  client: Administrador | Franquia | Associate | Consultant | null
  signIn: (data: Login) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({ children }: any) => {
  let clientJSON = null
  let tokenJSON = null
  let optionJSON = null
  let signedJSON = null
  if (process.browser) {
    clientJSON = localStorage.getItem('client')
    tokenJSON = localStorage.getItem('token')
    optionJSON = localStorage.getItem('option')
    signedJSON = localStorage.getItem('signed')
  }

  const [client, setClient] = useState<
    Administrador | Franquia | Associate | Consultant | null
  >(process.browser ? clientJSON !== null && JSON.parse(clientJSON) : null)

  const [token, setToken] = useState<string | null>(
    process.browser ? tokenJSON : null
  )

  const [option, setOption] = useState(
    process.browser ? optionJSON !== null && JSON.parse(optionJSON) : -1
  )
  const [signed, setSigned] = useState(
    process.browser ? signedJSON !== null && JSON.parse(signedJSON) : false
  )

  useEffect(() => {
    async function lazzy() {
      const { data } = await getCredits()
      const associado = client as Associate
      associado.credit = data.credits
      associado.limit = data.limit
      setClient(associado)
    }
    signed && token && lazzy()
  }, [])

  const signIn = async (payload: Login) => {
    try {
      const { data } = await postLogin({
        email: payload.email,
        password: payload.password
      })

      setClient(data.client)
      setToken(data.token)
      setOption(data.option)
      setSigned(true)

      if (process.browser !== null) {
        localStorage.setItem('client', JSON.stringify(data.client))
        localStorage.setItem('token', data.token)
        localStorage.setItem('option', JSON.stringify(data.option))
        localStorage.setItem('signed', JSON.stringify(true))
      }

      switch (data.option) {
        case 1:
          Router.push('/administrador')
          break
        case 2:
          Router.push('/franquia')
          break
        case 3:
          Router.push('/consultor')
          break
        case 4:
          Router.push('/home-associado')
          break
      }
      toast.success('Seja bem vindo')
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.warn('Credenciais inválidas, tente novamente')
            break
          case 404:
            toast.warn('Credenciais incorretas, tente novamente')
            break
          case 401:
            toast.warn('Credenciais incorretas, tente novamente')
            break
          case 403:
            toast.warn(
              'Seu acesso foi negado pela sua franquia. Entre em contato para regularizar a situação.'
            )
            break
          case 406:
            toast.success(
              'Seus dados estão sendo analizados pela franquia. Esse processo pode demorar até 3 dias uteis. Caso se estenda, entre em contato conosco.',
              { autoClose: 10000, hideProgressBar: false }
            )
            break
          case 408:
            toast.error(
              'Seu acesso foi negado pela franqueadora. Entre em contato para regularizar a situação.',
              { autoClose: 10000, hideProgressBar: false }
            )
            break
          default:
            toast.error(
              'Código: ' +
                error.response.status +
                '. Caso persista, entre em contato com o administrador do sistema.'
            )
        }
      } else {
        toast.warn(
          'Problema de conexão, verifique sua internet, e caso persista, contate o administrador do sistema.'
        )
      }
      console.log(error)
    }
  }
  function signOut() {
    Router.push('/')
    setClient(null)
    setToken(null)
    setOption(-1)
    setSigned(false)
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        option,
        client,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
