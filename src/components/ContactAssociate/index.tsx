// import Button from 'components/Button'
import { ContactAssociateProps } from 'Types'
import * as S from './styles'

const ContactAssociate = ({
  img,
  associate,
  description,
  contact,
  street,
  number,
  neighborhood,
  city,
  state,
  instagram,
  site,
  facebook
}: ContactAssociateProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Image src={img} role="img" />
      <S.WrapperDetails>
        <S.Title>{associate}</S.Title>
        <S.Sub>{description}</S.Sub>
        <S.Sub>Contato comercial: {contact}</S.Sub>
        <S.Sub>
          {street}, {number}, {neighborhood}, {city}/{state}{' '}
        </S.Sub>
      </S.WrapperDetails>
    </S.Content>
    {/*
    <S.WrapperContact>
      <S.Title>Contato com o associado</S.Title>
      <S.WrapperField>
        <div>
          <S.Label>Nome</S.Label>
          <S.Input />
        </div>
        <div>
          <S.Label>Cargo</S.Label>
          <S.Input />
        </div>
        <div>
          <S.Label>Assunto</S.Label>
          <S.Input />
        </div>
      </S.WrapperField>

      <S.WrapperField>
        <div>
          <S.Label>Mensagem</S.Label>
          <S.TextArea />
        </div>
      </S.WrapperField>

      <Button background="black" size="xxsmall" radius="radius100">
        Enviar
      </Button>
    </S.WrapperContact> */}
  </S.Wrapper>
)

export default ContactAssociate
