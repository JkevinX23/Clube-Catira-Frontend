import * as S from './styles'
import Image from 'next/image'
import Button from 'components/Button'
import TextField from 'components/TextField'

export default function PDV() {
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
          <TextField placeholder="xxxxxxxxxxxxx-xxxxx" />
        </S.InputWrapper>
        <Button fullWidth>Confirmar</Button>
      </S.Content>
    </S.Wrapper>
  )
}
