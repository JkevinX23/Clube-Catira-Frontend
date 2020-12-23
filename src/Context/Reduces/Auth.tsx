/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react'
import { postLogin } from 'Context/Action/Login'
import { Administrador, Login, Franquia, Associate } from 'Types'
import Router from 'next/router'
import { toast } from 'react-toastify'
import api from 'services/api'
interface IAuthContext {
  signed: boolean
  option: number
  client: Administrador | Franquia | Associate | null
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
    Administrador | Franquia | Associate | null
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

  const signIn = async (payload: Login) => {
    try {
      const { data } = await postLogin({
        email: payload.email,
        password: payload.password
      })

      console.log(data)

      setClient(data.client)
      setToken(data.token)
      setOption(data.option)
      setSigned(true)

      if (process.browser !== null) {
        console.log(JSON.stringify(client))
        localStorage.setItem('client', JSON.stringify(data.client))
        localStorage.setItem('token', data.token)
        localStorage.setItem('option', JSON.stringify(data.option))
        localStorage.setItem('signed', JSON.stringify(true))
      }

      Router.push('/home-associado')
      toast.success('Seja bem vindo')
    } catch (error) {
      toast.warn('Credenciais incorretas, tente novamente')
      console.log(error)
    }
  }
  function signOut() {
    setClient(null)
    setToken(null)
    setOption(-1)
    setSigned(false)

    process.browser && localStorage.clear()
    Router.push('/')
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
