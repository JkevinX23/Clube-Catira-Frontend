import Create from 'templates/Show/Associate/Associate'
import { Associate } from 'Types'
import { useRouter } from 'next/router'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'

export default function ShowAssociadoPage() {
  const [key, setKey] = useState(0)
  const props = useContext(AuthContext)
  const client = props.client as Associate
  const router = useRouter()

  useEffect(() => {
    if (!props.signed) {
      if (process.browser) {
        router.push('/sign-in')
      }
    }
  }, [props.signed, router])

  useEffect(() => {
    if (process.browser) {
      switch (props.option) {
        case 1:
          router.push('/administrador')
          break
        case 2:
          router.push('/franquia')
          break
        case 3:
          router.push('/consultor')
          break
        case 4:
          setKey(Number(router.query.id))
          break
      }
    }
  }, [props.option, router])

  return (
    <div>
      {key > 0 && props.signed && process.browser && props.option === 4 && (
        <Create
          HeaderProps={{
            associate: client && client.fantasy_name,
            credits: client && client.credit,
            limit: client && client.limit
          }}
          id={key}
        />
      )}
    </div>
  )
}
