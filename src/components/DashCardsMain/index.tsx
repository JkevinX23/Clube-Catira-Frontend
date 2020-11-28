import * as S from './styles'
export type DashCardsMainProps = {
  icon?: 'associates' | 'transactions' | 'pending' | 'offers'
  title: string
  value: string
}

const DashCardsMain = ({ icon, title, value }: DashCardsMainProps) => (
  <S.Wrapper icon={icon}>
    <S.IconWrapper>
      <S.Icon
        src={
          icon === 'associates'
            ? '/img/group.svg'
            : icon === 'transactions'
            ? '/img/transaction-icon.svg'
            : icon === 'pending'
            ? '/img/payment-pending.svg'
            : icon === 'offers'
            ? '/img/offers.svg'
            : ''
        }
      />
    </S.IconWrapper>
    <S.Title> {title} </S.Title>
    <S.Value> {value} </S.Value>
  </S.Wrapper>
)

export default DashCardsMain
