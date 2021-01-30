import * as S from './styles'
import Link from 'next/link'
export type CardAssociatesProps = {
  img: string
  id: number
  name: string
  city: string
  state: string
}

const CardAssociates = ({
  id,
  img,
  name,
  city,
  state
}: CardAssociatesProps) => (
  <Link href={`/associado/associado?id=${id}`}>
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={name} />
      <S.Title>{name}</S.Title>
      <S.subTitle>
        {city}/{state}
      </S.subTitle>
    </S.Wrapper>
  </Link>
)

export default CardAssociates
