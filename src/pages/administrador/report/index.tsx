import Create from 'templates/ReportPage'
import AuthContext from 'Context/Reduces/Auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

export default function Administrador() {
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
  return <Create />
}
