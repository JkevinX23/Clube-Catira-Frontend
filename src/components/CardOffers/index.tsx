import Button from 'components/Button'
import * as S from './styles'
import { useRouter } from 'next/router'
export type CardOffersProps = {
  id: number
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
  value,
  id
}: CardOffersProps) => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={name} />
      <S.Title>{name}</S.Title>
      <S.subTitle>{associate}</S.subTitle>
      <S.subTitle>
        {city}/{state}
      </S.subTitle>

      <S.BuyWrapper>
        {Number(value) > 0 ? (
          <S.Value>CT${value}</S.Value>
        ) : (
          <S.subTitle>A Negociar</S.subTitle>
        )}
        <Button
          size="xxsmall"
          background="white"
          onClick={() => {
            router.push({ pathname: '/associado/oferta', query: { id } })
          }}
        >
          Comprar
        </Button>
      </S.BuyWrapper>
    </S.Wrapper>
  )
}

export default CardOffers
