import * as S from './styles'

export type MyCreditsProps = {
  credits: string
  spent: string
  sold: string
}

const MyCredits = ({ credits, spent, sold }: MyCreditsProps) => (
  <S.Wrapper>
    <S.WrapperTitle>
      <S.Title>Meus Créditos</S.Title>
    </S.WrapperTitle>
    <S.InfoBox>
      <p>Créditos</p>
      <p>Ct${credits}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Valor Gasto</p>
      <p>Ct${spent}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Valor Vendido</p>
      <p>Ct${sold}</p>
    </S.InfoBox>
  </S.Wrapper>
)

export default MyCredits
