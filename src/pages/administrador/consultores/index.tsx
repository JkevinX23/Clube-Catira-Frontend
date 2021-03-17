import Create from 'templates/ConsultantAdministrador'
import AuthContext from 'Context/Reduces/Auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Administrador } from 'Types'
import { useContext, useEffect } from 'react'

export default function Franchises() {
  const props = useContext(AuthContext)
  const client = props.client as Administrador
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
  }, [props.option, router])

  return (
    <div>
      {props.signed && process.browser && props.option === 1 && (
        <Create name={client && client.name} role="Administrador" />
      )}
    </div>
  )
}
