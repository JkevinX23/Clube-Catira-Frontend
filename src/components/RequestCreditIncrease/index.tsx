import Button from 'components/Button'
import { postIncrease } from 'Context/Action/Increases'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CurrencyInput from 'react-currency-masked-input'

import * as S from './styles'
const RequestCreditIncrease = () => {
  const [value, setValue] = useState(0.0)
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
        `Um aumento de Ctz: ${value} foi solicitado. Iremos analisar seu pedido em até 2 dias uteis.`
      )
      setValue(0)
      setReason('')
    } catch (err) {
      console.log(err)
      toast.warn('Infelizmente não foi possível realizar a sua solicitação')
    }
  }

  return (
    <S.Wrapper>
      <h4> SOLICITAR AUMENTO DE LIMITE </h4>

      <S.WrapperField>
        <S.Label>Valor do Aumento (Ctz)</S.Label>

        <S.InputDiv>
          <CurrencyInput
            separator={'.'}
            onChange={(_e: any, f: number) => f <= 9999999 && setValue(f)}
            value={value}
            min={0}

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
