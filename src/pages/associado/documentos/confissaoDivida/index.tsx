import Create from 'templates/Documentos/ConfissaoDivida'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ConfissaoDividaProps } from 'Types'

export default function ConfissaoDivida() {
  const props = useContext(AuthContext)
  const router = useRouter()

  const devedor = router.query.company_name
  const documento = router.query.document
  const valor = router.query.value
  const proximoPagamento = router.query.next_payment
  const proximoPagamentoPA = router.query.next_payment_ny
  const cidade = router.query.city
  const data = router.query.date
  const id = router.query.code
  const reason = router.query.reason
  const valueRequest = Number(router.query.valueRequest)
  const confissaoDivida = {
    id,
    devedor,
    documento,
    valor,
    proximoPagamento,
    proximoPagamentoPA,
    data,
    cidade,
    reason,
    valueRequest
  } as ConfissaoDividaProps

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

  return (
    <Create
      id={confissaoDivida.id}
      devedor={confissaoDivida.devedor}
      cidade={confissaoDivida.cidade}
      data={confissaoDivida.data}
      documento={confissaoDivida.documento}
      proximoPagamento={confissaoDivida.proximoPagamento}
      proximoPagamentoPA={confissaoDivida.proximoPagamentoPA}
      valor={confissaoDivida.valor}
      reason={confissaoDivida.reason}
      valueRequest={confissaoDivida.valueRequest}
    />
  )
}
