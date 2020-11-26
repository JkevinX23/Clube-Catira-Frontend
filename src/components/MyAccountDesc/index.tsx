import Button from 'components/Button'
import * as S from './styles'

const MyAccountDesc = () => (
  <S.Wrapper>
    <S.WrapperField>
      <div>
        <S.Label>Site</S.Label>
        <S.Input />
      </div>
      <div>
        <S.Label>Facebook</S.Label>
        <S.Input />
      </div>
      <div>
        <S.Label>Instagram</S.Label>
        <S.Input />
      </div>
    </S.WrapperField>

    <S.WrapperField>
      <div>
        <S.Label>Sobre a empresa</S.Label>
        <S.TextArea />
      </div>
    </S.WrapperField>

    <Button background="black" size="xxsmall" radius="radius100">
      Atualizar
    </Button>
  </S.Wrapper>
)

export default MyAccountDesc
