import Create from 'templates/Consultor/Profile'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useContext, useEffect } from 'react'
import { Consultant } from 'Types'

export default function Profile() {
  const props = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!props.signed) {
      if (process.browser) {
        router.push('/sign-in')
      }
      toast.info('Olá, realize seu login para continuar')
    }
  }, [props.signed, router])

  const client = props.client as Consultant

  return <Create name={client && client.name} role="Consultor" />
}
