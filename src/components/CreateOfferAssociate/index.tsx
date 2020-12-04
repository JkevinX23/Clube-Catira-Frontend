import Button from 'components/Button'
import * as S from './styles'

const CreateOfferAssociate = () => (
  <S.Wrapper>
    <S.WrapperField>
      <h4> CADASTRAR OFERTA </h4>

      <S.Label>Título da Oferta</S.Label>
      <S.Input />

      <S.Label>Descrição</S.Label>
      <S.TextArea />
    </S.WrapperField>

    <S.WrapperField>
      <S.Label>Vai para uma empresa específica</S.Label>
      <S.WrapperRadio>
        <S.InputRadio type="radio" id="nao" name="direct" value="nao" />
        <S.RadioLabel>Sim</S.RadioLabel>
        <S.InputRadio type="radio" id="sim" name="direct" value="sim" checked />
        <S.RadioLabel>Não</S.RadioLabel>
      </S.WrapperRadio>

      <S.Label>Insira o valor</S.Label>
      <S.Input />

      <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
      <S.Input />

      <S.Label>Quantidade Disponível</S.Label>
      <S.WrapperRadio>
        <S.InputRadio
          type="radio"
          id="limitada"
          name="limit"
          value="limitada"
        />
        <S.RadioLabel>Limitada</S.RadioLabel>

        <S.InputRadio
          type="radio"
          id="ilimitada"
          name="limit"
          value="ilimitada"
          checked
        />
        <S.RadioLabel>Ilimitada</S.RadioLabel>
      </S.WrapperRadio>

      <S.Label>Insira a quantidade</S.Label>
      <S.Input />

      <S.WrapperButton>
        <Button background="black" size="xxsmall" radius="radius100">
          Criar Oferta
        </Button>
      </S.WrapperButton>
    </S.WrapperField>
  </S.Wrapper>
)

export default CreateOfferAssociate
