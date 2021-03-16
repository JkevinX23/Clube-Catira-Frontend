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
    }
  }, [props.signed, router])

  const client = props.client as Associate

  useEffect(() => {
    async function loadProfile() {
      const { data } = await getProfileAssociate()
      setProfile(data)
    }
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
          loadProfile()
          break
      }
    }
  }, [props.option, router])

  return (
    <div>
      {props.signed && process.browser && props.option === 4 && (
        <Create
          Profile={profile}
          HeaderProps={{
            associate: client && client.fantasy_name,
            credits: client && client.credit
          }}
        />
      )}
    </div>
  )
}
