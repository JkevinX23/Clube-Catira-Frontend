import Button from 'components/Button'
import { emitirDocumento } from 'Context/Action/Increases'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormatCurrency } from 'utils/Masks'
import { useRouter } from 'next/router'

import * as S from './styles'
const RequestCreditIncrease = () => {
  const [value, setValue] = useState(0.0)
  const [valueFormated, setValueFormated] = useState('0,00')
  const [reason, setReason] = useState('')
  const route = useRouter()

  async function handleSubmit() {
    try {
      if (reason.length < 5) {
        toast.warn(
          'Por favor, descreva de forma mais detalhada a razão pela qual está soliciando o aumento.'
        )
        return
      }
      const { data } = await emitirDocumento({ type: 1, value })
      toast.success(`Leia atentamente o documento de confissão de dívida.`)
      route.push({
        pathname: '/associado/documentos/confissaoDivida',
        query: {
          code: data.id,
          devedor: data.associate_name,
          documento: data.associate_document,
          valor: data.value,
          proximoPagamento: data.next_payment,
          proximoPagamentoPA: data.next_payment_ny,
          data: data.date,
          cidade: data.city,
          reason,
          valueRequest: value,
          endereco: data.address,
          responsavel: data.responsible,
          contato1: data.contact1,
          contato2: data.contact2
        }
      })
    } catch (err) {
      console.log(err)
      toast.warn('Infelizmente não foi possível realizar a sua solicitação')
    }
  }

  function mascaraMoeda(value: string) {
    const onlyDigits = value
      .split('')
      .filter((s: any) => /\d/.test(s))
      .join('')
      .padStart(2, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    if (Number(digitsFloat) >= 9999999) return
    setValueFormated(FormatCurrency(Number(digitsFloat)))
    setValue(Number(digitsFloat))
  }

  return (
    <S.Wrapper>
      <h4> SOLICITAR AUMENTO DE LIMITE </h4>

      <S.WrapperField>
        <S.Label>Valor do Aumento (Catz)</S.Label>

        <S.InputDiv>
          <S.Input
            onChange={(e) => mascaraMoeda(e.target.value)}
            value={valueFormated}
          />
        </S.InputDiv>
      </S.WrapperField>

      <S.WrapperField>
        <S.Label>Motivo do Aumento </S.Label>

        <S.TextArea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          maxLength={240}
        />
      </S.WrapperField>

      <Button
        background="black"
        size="xxsmall"
        radius="radius100"
        onClick={() => handleSubmit()}
      >
        Solicitar
      </Button>
    </S.Wrapper>
  )
}

export default RequestCreditIncrease
