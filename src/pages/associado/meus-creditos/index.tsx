import Create from 'templates/MyCredits'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { Associate } from 'Types'

export default function MyOffers() {
  const props = useContext(AuthContext)
  const router = useRouter()

  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
    toast.info('Olá, realize seu login para continuar')
  }

  const client = props.client as Associate

  return (
    <Create
      HeaderProps={{
        associate: client && client.fantasy_name,
        credits: client && client.credit
      }}
    />
  )
}
