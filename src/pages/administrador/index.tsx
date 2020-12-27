import Page from 'templates/HomeAdministrador'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Administrador } from 'Types'
import { getHomeAdmin } from 'Context/Action/HomeAdmin'

export default function HomeAdmin() {
  const [content, setContent] = useState({})
  const router = useRouter()

  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
    toast.info('Olá, realize seu login para continuar')
  }

  const client = props.client as Administrador

  useEffect(() => {
    async function loadHomeData() {
      try {
        const { data } = await getHomeAdmin()
        setContent(data)
      } catch (err) {
        console.log(err)
      }
    }
    loadHomeData()
  }, [])

  return (
    <Page
      name={client && client.name}
      role="Administrador"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      page_data={content}
    />
  )
}
