import * as S from './styles'

export type PendingAssociateProps = {
  id: number
  associated: string
  offer: string
}
const PendingAssociate = ({ id, associated, offer }: PendingAssociateProps) => {
  return (
    <S.Wrapper>
      <S.Sub>{offer}</S.Sub>
      <S.Title>{associated}</S.Title>
    </S.Wrapper>
  )
}

export default PendingAssociate
