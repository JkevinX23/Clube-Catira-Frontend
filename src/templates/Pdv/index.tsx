import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function PDV() {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (token.length < 6) {
      return
    }
    toast.success('Token tem 6 dígitos')
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
