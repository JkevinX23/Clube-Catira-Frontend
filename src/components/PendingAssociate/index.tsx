import * as S from './styles'

export type PendingAssociateProps = {
  id: number
  franchise: string
  associated: string
  handleOption: (id: number, status: number) => void
}
const PendingAssociate = ({
  id,
  franchise,
  associated,
  handleOption
}: PendingAssociateProps) => {
  return (
    <S.Wrapper>
      <S.Sub>{franchise}</S.Sub>
      <S.Title>{associated}</S.Title>
      <S.FunctionsWrapper>
        <a onClick={() => handleOption(id, 1)}>APROVAR</a>
        <span> | </span>
        <a onClick={() => handleOption(id, 2)}>SUSPENDER</a>
        <span> | </span>
        <a>VER</a>
      </S.FunctionsWrapper>
    </S.Wrapper>
  )
}

export default PendingAssociate
