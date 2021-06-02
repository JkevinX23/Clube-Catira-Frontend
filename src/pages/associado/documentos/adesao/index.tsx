import Create from 'templates/Documentos/AdesaoPreenchido'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

export default function AdesaoPreenchido() {
  const props = useContext(AuthContext)
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
          break
      }
    }
  }, [props.option, router])

  return <Create />
}
