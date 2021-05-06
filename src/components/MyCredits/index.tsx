import { FormatCurrency } from 'utils/Masks'
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
      <S.Title>Meu Saldo</S.Title>
    </S.WrapperTitle>
    <S.InfoBox>
      <p>Saldo</p>
      <p>Ct$ {FormatCurrency(credits)}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Compras</p>
      <p>Ct$ {FormatCurrency(spent)}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Compras pendente</p>
      <p>Ct$ {FormatCurrency(pendingSpend)}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Vendas</p>
      <p>Ct$ {FormatCurrency(received)}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Vendas Pendente</p>
      <p>Ct$ {FormatCurrency(receivable)}</p>
    </S.InfoBox>

    <S.InfoBox>
      <p>Limite de Crédito</p>
      <p>Ct$ {FormatCurrency(limit)}</p>
    </S.InfoBox>
  </S.Wrapper>
)

export default MyCredits
