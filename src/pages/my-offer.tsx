import Create from 'templates/MyOffers'
import { AuthContext } from 'Context/Auth'
import { useContext } from 'react'

export default function MyOffers() {
  const { state } = useContext(AuthContext)
  console.log(state.auth)
  return (
    <Create
      HeaderProps={{ associate: state.auth.client.email, credits: '1500' }}
    />
  )
}
