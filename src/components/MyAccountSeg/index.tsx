import Button from 'components/Button'
import * as S from './styles'

const MyAccountSeg = () => (
  <S.Wrapper>
    <S.WrapperField>
      <div>
        <S.Label>Redefinir Senha</S.Label>
        <S.Input type="password" placeholder="*********" />
      </div>
      <div>
        <S.Label>Confirmar Senha</S.Label>
        <S.Input type="password" placeholder="*********" />
      </div>
    </S.WrapperField>

    <Button size="xxsmall" background="green" radius="radius100">
      Atualizar
    </Button>
  </S.Wrapper>
)

export default MyAccountSeg
