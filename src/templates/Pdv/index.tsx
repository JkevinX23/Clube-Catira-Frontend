import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { validateVoucher } from 'Context/Action/Voucher'

export default function PDV() {
  const [token, setToken] = useState('')

  useEffect(() => {
    async function postToken() {
      if (token.length < 6) {
        return
      }
      try {
        const { data } = await validateVoucher(token)
        console.log(data)
        toast.success('Voucher Validado com Sucesso!')
      } catch (err) {
        console.log(err)
        toast.warn('Nao foi possível validar o voucher.')
      }
    }
    postToken()
  }, [token])

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
            maxLength={6}
          />
        </S.InputWrapper>
        <Button fullWidth>Confirmar</Button>
      </S.Content>
    </S.Wrapper>
  )
}
