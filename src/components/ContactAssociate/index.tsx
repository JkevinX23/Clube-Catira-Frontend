import Button from 'components/Button'
import * as S from './styles'

export type ContactAssociateProps = {
  img: string

  associate: string
  description: string

  contact: string

  street: string
  number: string
  neighborhood: string
  city: string
  state: string
}

const ContactAssociate = ({
  img,
  associate,
  description,
  contact,
  street,
  number,
  neighborhood,
  city,
  state
}: ContactAssociateProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Image src={img} role="img" aria-label={name} />
      <S.WrapperDetails>
        <S.Title>{associate}</S.Title>
        <S.Sub>{description}</S.Sub>
        <S.Sub>Contato comercial: {contact}</S.Sub>
        <S.Sub>
          {street}, {number}, {neighborhood}, {city}/{state}{' '}
        </S.Sub>
      </S.WrapperDetails>
    </S.Content>

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
    </S.WrapperContact>
  </S.Wrapper>
)

export default ContactAssociate
