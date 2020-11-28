import * as S from './styles'

export type PendingAssociateProps = {
  franchise: string
  associate: string
}
const PendingAssociate = ({ franchise, associate }: PendingAssociateProps) => (
  <S.Wrapper>
    <S.Sub>{franchise}</S.Sub>
    <S.Title>{associate}</S.Title>
    <S.FunctionsWrapper>
      <a>APROVAR</a>
      <span> | </span>
      <a>SUSPENDER</a>
      <span> | </span>
      <a>VER</a>
    </S.FunctionsWrapper>
  </S.Wrapper>
)

export default PendingAssociate
