import Create from 'templates/MyCatiras'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useContext, useEffect } from 'react'
import { Associate } from 'Types'

export default function MyOffers() {
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

  const client = props.client as Associate

  return (
    <Create
      HeaderProps={{
        associate: client && client.fantasy_name,
        credits: client && client.credit,
        limit: client && client.limit
      }}
    />
  )
}
