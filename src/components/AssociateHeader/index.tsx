import * as S from './styles'

export type AssociateHeaderProps = {
  associate: string
  credits: string
}
const AssociateHeader = ({ associate, credits }: AssociateHeaderProps) => (
  <S.Wrapper>
    <S.Name>Bem Vindo {associate}</S.Name>
    <S.Box>
      <p>Créditos</p>
      <S.Value>CT${credits}</S.Value>
    </S.Box>
  </S.Wrapper>
)

export default AssociateHeader
