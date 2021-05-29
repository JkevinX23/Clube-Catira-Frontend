import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function FourOhFour() {
  const router = useRouter()

  useEffect(() => {
    router.reload()
  }, [router])
  return (
    <>
      <h1>404 - Página não encontrada</h1>
      <Link href="/">
        <a>Voltar para o home</a>
      </Link>
    </>
  )
}
