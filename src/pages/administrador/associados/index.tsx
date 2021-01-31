import Create from 'templates/AssociateAdministrador'
import AuthContext from 'Context/Reduces/Auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Administrador } from 'Types'
import { useContext, useEffect } from 'react'

export default function Associates() {
  const props = useContext(AuthContext)
  const client = props.client as Administrador
  const router = useRouter()

  useEffect(() => {
    if (!props.signed) {
      if (process.browser) {
        router.push('/sign-in')
      }
      toast.info('Olá, realize seu login para continuar')
    }
  }, [props.signed, router])

  return <Create name={client && client.name} role="Administrador" />
}
