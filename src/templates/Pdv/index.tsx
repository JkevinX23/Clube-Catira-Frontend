import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { validateVoucher } from 'Context/Action/Voucher'
import { FormatDateByFNS } from 'utils/Masks'

export default function PDV() {
  const [token, setToken] = useState('')

  async function postToken() {
    if (token.length < 6) {
      toast.error('O Voucher deve ter pelo menos 6 dígitos.')
      return
    }
    try {
      const { data } = await validateVoucher(token.toUpperCase())
      console.log(data)
      toast.success('Voucher Validado com Sucesso!')
    } catch (err) {
      switch (err.response.status) {
        case 404:
          toast.error('Código inválido, tente novamente')
          setToken('')
          return
        case 402:
          toast.error(
            'Este voucher já foi utilizado na data ' +
              FormatDateByFNS(err.response.data.data),
            {
              autoClose: false
            }
          )
          return
        case 403:
          toast.error(
            'A transação que gerou este voucher está irregular. O comprador deve entrar em contato com sua franquia.',
            {
              autoClose: false
            }
          )
          return
        default:
          toast.error(
            'Nao foi possível validar o voucher. [code: ' +
              err.response.status +
              ']',
            { autoClose: 10000 }
          )
      }
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <Image src="/img/clube-logo-pdv.png" alt="me" width="306" height="82" />
        <div>
          <S.TextWrapper>Ponto de Troca</S.TextWrapper>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
        <S.InputWrapper>
          <TextField
            placeholder="xxxxxxxxxxxxx-xxxxx"
            onChange={(e) => setToken(e.target.value)}
            value={token}
            maxLength={10}
            onKeyPressCapture={(e) => {
              if (e.key === 'Enter') {
                postToken()
              }
            }}
          />
        </S.InputWrapper>
        <Button onClick={() => postToken()} fullWidth>
          Confirmar
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}
