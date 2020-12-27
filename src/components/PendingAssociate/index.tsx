import * as S from './styles'

export type PendingAssociateProps = {
  id: number
  franchise: string
  associated: string
}
const PendingAssociate = ({ franchise, associated }: PendingAssociateProps) => (
  <S.Wrapper>
    <S.Sub>{franchise}</S.Sub>
    <S.Title>{associated}</S.Title>
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
