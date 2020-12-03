import Button from 'components/Button'
import * as S from './styles'

const CreateOfferAssociate = () => (
  <S.Wrapper>
    <h4> SOLICITAR AUMENTO DE CRÉDITOS </h4>

    <S.WrapperField>
      <S.Label>Valor do Aumento</S.Label>

      <S.Input />
    </S.WrapperField>

    <S.WrapperField>
      <S.Label>Motivo do Aumento</S.Label>

      <S.TextArea />
    </S.WrapperField>

    <Button background="black" size="xxsmall" radius="radius100">
      Solicitar
    </Button>
  </S.Wrapper>
)

export default CreateOfferAssociate
