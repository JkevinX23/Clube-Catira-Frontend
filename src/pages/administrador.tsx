import Page from 'templates/HomeAdministrador'
import AuthContext from 'Context/Reduces/Auth'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Associate } from 'Types'

export default function HomeAdmin() {
  const router = useRouter()

  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
    toast.info('Olá, realize seu login para continuar')
  }

  const client = props.client as Associate

  return <Page name="kevin" role="Administrador" />
}
