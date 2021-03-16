import Create from 'templates/AssociatesDetails'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
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
    }
  }, [props.signed, router])

  const client = props.client as Associate

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
          break
      }
    }
  }, [props.option, router])

  return (
    <div>
      {props.signed && process.browser && props.option === 4 && (
        <Create
          HeaderProps={{
            associate: client && client.fantasy_name,
            credits: client && client.credit
          }}
        />
      )}
    </div>
  )
}
