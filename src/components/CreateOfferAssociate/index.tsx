import Button from 'components/Button'
import * as S from './styles'
import { useState } from 'react'

const CreateOfferAssociate = () => {
  const [isIlimmited, setIlimited] = useState(true)

  function handleIlimited() {
    setIlimited(true)
  }
  function handleLimited() {
    setIlimited(false)
  }

  return (
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
          <S.RadioLabel>
            <S.InputRadio type="radio" id="sim" name="direct" value="sim" />
            Sim
          </S.RadioLabel>

          <S.RadioLabel>
            <S.InputRadio
              type="radio"
              id="nao"
              name="direct"
              value="nao"
              defaultChecked
            />
            Não
          </S.RadioLabel>
        </S.WrapperRadio>

        <S.Label>Insira o valor</S.Label>
        <S.Input />

        <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
        <S.Input />

        <S.Label>Quantidade Disponível</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel onClick={handleLimited}>
            <S.InputRadio
              type="radio"
              id="limitada"
              name="limit"
              value="limitada"
            />
            Limitada
          </S.RadioLabel>

          <S.RadioLabel onClick={handleIlimited}>
            <S.InputRadio
              type="radio"
              id="ilimitada"
              name="limit"
              value="ilimitada"
              defaultChecked
            />
            Ilimitada
          </S.RadioLabel>
        </S.WrapperRadio>

        {!isIlimmited && (
          <>
            <S.Label>Insira a quantidade</S.Label>
            <S.Input />
          </>
        )}

        <S.WrapperButton>
          <Button background="black" size="xxsmall" radius="radius100">
            Criar Oferta
          </Button>
        </S.WrapperButton>
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default CreateOfferAssociate
