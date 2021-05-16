import Button from 'components/Button'
import { postIncrease } from 'Context/Action/Increases'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormatCurrency } from 'utils/Masks'

import * as S from './styles'
const RequestCreditIncrease = () => {
  const [value, setValue] = useState(0.0)
  const [valueFormated, setValueFormated] = useState('0,00')
  const [reason, setReason] = useState('')

  async function handleSubmit() {
    try {
      if (reason.length < 5) {
        toast.warn(
          'Por favor, descreva de forma mais detalhada a razão pela qual está soliciando o aumento.'
        )
        return
      }
      await postIncrease({ reason, value })
      toast.success(
        `Um aumento de CT$: ${value} foi solicitado. Iremos analisar seu pedido.`
      )
      setValue(0)
      setReason('')
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
