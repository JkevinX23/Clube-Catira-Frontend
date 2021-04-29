import Button from 'components/Button'
import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from 'Context/Reduces/Auth'
import { Associate } from 'Types'
export type CardOffersProps = {
  id: number
  img: string
  title: string
  name: string
  associate: string
  city: string
  state: string
  value: number
  associateId: number
}

const CardOffers = ({
  img,
  name,
  associate,
  city,
  state,
  value,
  id,
  associateId
}: CardOffersProps) => {
  const router = useRouter()
  const props = useContext(AuthContext)
  const client = props.client as Associate

  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={name} />
      <S.Title>{name}</S.Title>
      <Link href={`/associado/associado?id=${associateId}`}>
        <S.subTitle isLink>{associate}</S.subTitle>
      </Link>

      <S.subTitle>
        {city}/{state}
      </S.subTitle>

      <S.BuyWrapper>
        {Number(value) > 0 ? (
          <S.Value>CT${value}</S.Value>
        ) : (
          <S.subTitle>A Negociar</S.subTitle>
        )}
        <S.Button>
          {client.id !== associateId ? (
            <Button
              fullWidth
              size="xxsmall"
              background="blue"
              onClick={() => {
                router.push({ pathname: '/associado/oferta', query: { id } })
              }}
            >
              Comprar
            </Button>
          ) : (
            <Button
              fullWidth
              size="xxsmall"
              background="blue"
              onClick={() => {
                router.push({
                  pathname: '/associado/minha-oferta',
                  query: { id }
                })
              }}
            >
              Ver
            </Button>
          )}
        </S.Button>
      </S.BuyWrapper>
    </S.Wrapper>
  )
}

export default CardOffers
