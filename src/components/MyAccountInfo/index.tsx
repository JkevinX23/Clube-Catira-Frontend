import Button from 'components/Button'
import * as S from './styles'

export type MyAccountInfoProps = {
  img: string
  fantasy_name: string
  category: string
  contact: string
  city: string
  state: string
  street: string
  number: string
  neighborhood: string
  representative_name: string
  email: string
}

const MyAccountInfo = ({
  img,
  fantasy_name,
  category,
  contact,
  city,
  state,
  street,
  number,
  neighborhood,
  representative_name,
  email
}: MyAccountInfoProps) => (
  <S.Wrapper>
    <S.WrapperImage>
      <S.Image src={img} role="img" aria-label={fantasy_name} />
      <Button size="xxsmall" background="green" radius="radius100">
        Trocar Logo
      </Button>
    </S.WrapperImage>

    <S.WrapperInfo>
      <S.Title>Informações Comerciais</S.Title>
      <S.WrapperText>
        <p>{fantasy_name}</p>
        <p>{category}</p>
        <p>{contact}</p>
        <p>
          {city}/{state}
        </p>
        <p>
          {street}, {number}
        </p>
        <p>{neighborhood}</p>
      </S.WrapperText>

      <S.Title>Dados Pessoais</S.Title>
      <S.WrapperText>
        <p>{representative_name}</p>
        <p>{email}</p>
      </S.WrapperText>
    </S.WrapperInfo>
  </S.Wrapper>
)

export default MyAccountInfo
