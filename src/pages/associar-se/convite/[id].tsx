import { useRouter } from 'next/router'
import Create from 'templates/CreateAccountSwitch'
export default function CreateAccSwitch() {
  const router = useRouter()
  const {
    query: { id }
  } = router
  return <Create id={id} />
}
