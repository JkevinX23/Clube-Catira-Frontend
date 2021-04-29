import * as S from './styles'

export type MyCreditsProps = {
  credits: number
  spent: number
  pendingSpend: number
  received: number
  receivable: number
  limit: number
}

const MyCredits = ({
  credits,
  spent,
  pendingSpend,
  received,
  receivable,
  limit
}: MyCreditsProps) => (
  <S.Wrapper>
    <S.WrapperTitle>
      <S.Title>Meus Créditos</S.Title>
    </S.WrapperTitle>
    <S.InfoBox>
      <p>Créditos</p>
      <p>Ct${credits}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Créditos Gastos</p>
      <p>Ct${spent}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Gasto Pendente</p>
      <p>Ct${pendingSpend}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Crédito Recebido</p>
      <p>Ct${received}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Créditos a receber</p>
      <p>Ct${receivable}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Limite de Crédito</p>
      <p>Ct${limit}</p>
    </S.InfoBox>
  </S.Wrapper>
)

export default MyCredits
