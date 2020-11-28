import * as S from './styles'

export type ReportCardDashProps = {
  direct: number
  pending: number
}

const ReportCardDash = ({ direct, pending }: ReportCardDashProps) => (
  <S.Wrapper>
    <S.Title>Relatório</S.Title>
    <S.WrapperInfo>
      <S.Sub>Ofertas diretas</S.Sub>
      <S.Lead direct>{direct}</S.Lead>
    </S.WrapperInfo>

    <S.WrapperInfo>
      <S.Sub>Ofertas pendentes</S.Sub>
      <S.Lead>{pending}</S.Lead>
    </S.WrapperInfo>
  </S.Wrapper>
)

export default ReportCardDash
