import Page from 'templates/Franquia/Home'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Franquia } from 'Types'
import { getHomeAdmin } from 'Context/Action/HomeAdmin'

export default function HomeFranchise() {
  const [content, setContent] = useState({})
  const router = useRouter()

  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
    toast.info('Olá, realize seu login para continuar')
  }

  const client = props.client as Franquia

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
    <Page name={client && client.name} role="Franquia" page_data={content} />
  )
}
