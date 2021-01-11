import Create from 'templates/Profile'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import { Associate } from 'Types'
import { getProfileAssociate } from 'Context/Action/Associates'

export default function Profile() {
  const [profile, setProfile] = useState<any>()
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

  useEffect(() => {
    async function loadProfile() {
      const { data } = await getProfileAssociate()
      setProfile(data)
    }
    loadProfile()
  }, [])

  return (
    <Create
      Profile={profile}
      HeaderProps={{
        associate: client && client.fantasy_name,
        credits: client && client.credit
      }}
    />
  )
}
