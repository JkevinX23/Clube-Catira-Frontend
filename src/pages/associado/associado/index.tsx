import Create from 'templates/Show/Associate/Associate'
import { Associate } from 'Types'
import { useRouter } from 'next/router'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function ShowAssociadoPage() {
  const [key, setKey] = useState(0)
  const props = useContext(AuthContext)
  const client = props.client as Associate
  const router = useRouter()
  useEffect(() => {
    setKey(Number(router.query.id))
  }, [router.query.id])

  useEffect(() => {
    if (!props.signed) {
      if (process.browser) {
        router.push('/sign-in')
      }
      toast.info('Olá, realize seu login para continuar')
    }
  }, [props.signed, router])

  return (
    key > 0 && (
      <Create
        HeaderProps={{
          associate: client && client.fantasy_name,
          credits: client && client.credit
        }}
        id={key}
      />
    )
  )
}
