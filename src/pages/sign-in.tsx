import Auth from 'templates/Auth'
import Create from 'templates/Show/Associate/Associate'
import { useRouter } from 'next/router'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'

export default function SignIn() {
  const props = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (process.browser && props.signed) {
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
          router.push('/home-associado')
          break
      }
    }
  }, [props.option, props.signed])
  return <Auth />
}
