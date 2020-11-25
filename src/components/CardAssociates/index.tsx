import * as S from './styles'

export type CardAssociatesProps = {
  img: string
  name: string
  city: string
  state: string
}

const CardAssociates = ({ img, name, city, state }: CardAssociatesProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={name} />
    <S.Title>{name}</S.Title>
    <S.subTitle>
      {city}/{state}
    </S.subTitle>
  </S.Wrapper>
)

export default CardAssociates
