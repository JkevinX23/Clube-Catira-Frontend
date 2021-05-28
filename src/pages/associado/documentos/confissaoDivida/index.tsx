import Create from 'templates/Documentos/ConfissaoDivida'
import AuthContext from 'Context/Reduces/Auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ConfissaoDividaProps } from 'Types'
import { useLocation } from 'react-router'

export default function ConfissaoDivida() {
  const props = useContext(AuthContext)
  const router = useRouter()
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const devedor = searchParams.get('company_name')
  const documento = searchParams.get('document')
  const valor = searchParams.get('value')
  const proximoPagamento = searchParams.get('next_payment')
  const proximoPagamentoPA = searchParams.get('next_payment_ny')
  const cidade = searchParams.get('city')
  const data = searchParams.get('date')
  const id = searchParams.get('code')
  const reason = searchParams.get('reason')
  const valueRequest = Number(searchParams.get('valueRequest'))
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
