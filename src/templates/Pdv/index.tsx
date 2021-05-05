import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { validateVoucher } from 'Context/Action/Voucher'
import { FormatCurrency, FormatDateByFNS } from 'utils/Masks'

export default function PDV() {
  const [token, setToken] = useState('')
  const [titulo, setTitulo] = useState('')
  const [valor, setValor] = useState('')
  const [status, setStatus] = useState('')
  const [isError, setIsError] = useState(false)
  async function postToken() {
    if (token.length < 6) {
      setIsError(true)
      toast.error('O Voucher deve ter pelo menos 6 dígitos.')
      setStatus('O Voucher deve ter pelo menos 6 dígitos.')
      return
    }
    try {
      const { data } = await validateVoucher(token.toUpperCase())
      setTitulo(data.Offer.title)
      setValor(FormatCurrency(data.ctz_value))
      setStatus('Voucher validado com sucesso!')
      toast.success('Voucher Validado com Sucesso!')
      setIsError(false)
    } catch (err) {
      console.log({ err })
      setIsError(true)
      setToken('')
      setTitulo('')
      setValor('')
      switch (err.response.status) {
        case 404:
          toast.error('Código inválido, tente novamente')
          setStatus('Código inválido')
          return
        case 402:
          toast.error(
            'Este voucher já foi utilizado na data ' +
              FormatDateByFNS(err.response.data.date),
            { autoClose: 10000 }
          )

          setStatus(
            'Este Voucher já foi utilizado na data ' +
              FormatDateByFNS(err.response.data.date)
          )
          return
        case 403:
          toast.error(
            'A transação que gerou este voucher está irregular. O comprador deve entrar em contato com sua franquia.',
            { autoClose: 10000 }
          )
          setStatus('A transação que gerou este voucher está irregular.')
          return
        default:
          setStatus(
            'Nao foi possível validar o voucher. [code: ' +
              err.response.status +
              ']'
          )
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
        <S.row>
          {!isError && (
            <S.InputWrapper>
              <TextField
                sucess={!isError}
                value={titulo}
                readOnly
                placeholder="Título da oferta"
              />
            </S.InputWrapper>
          )}
          {!isError && (
            <S.InputWrapper>
              <TextField
                sucess={!isError}
                value={valor}
                readOnly
                placeholder="Valor do voucher"
              />
            </S.InputWrapper>
          )}
        </S.row>
        <S.row>
          <S.InputWrapper>
            <TextField
              sucess={!isError}
              value={status}
              readOnly
              placeholder="Status da oferta"
            />
          </S.InputWrapper>
        </S.row>
      </S.Content>
    </S.Wrapper>
  )
}
