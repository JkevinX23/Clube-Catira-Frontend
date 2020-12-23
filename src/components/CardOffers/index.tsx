import Button from 'components/Button'
import * as S from './styles'

export type CardOffersProps = {
  img: string
  title: string
  name: string
  associate: string
  city: string
  state: string
  value: number
}

const CardOffers = ({
  img,
  name,
  associate,
  city,
  state,
  value
}: CardOffersProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={name} />
    <S.Title>{name}</S.Title>
    <S.subTitle>{associate}</S.subTitle>
    <S.subTitle>
      {city}/{state}
    </S.subTitle>

    <S.BuyWrapper>
      <S.Value>CT${value}</S.Value>
      <Button size="xxsmall" background="white">
        Comprar
      </Button>
    </S.BuyWrapper>
  </S.Wrapper>
)

export default CardOffers
