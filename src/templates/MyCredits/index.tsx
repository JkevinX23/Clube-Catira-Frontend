import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import RequestCreditIncrease from 'components/RequestCreditIncrease'
import MyCredits from 'components/MyCredits'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { getCredits } from 'Context/Action/Associates'

export type MyCreditsProps = {
  HeaderProps: AssociateHeaderProps
}

const MyCreditsTemplate = ({ HeaderProps }: MyCreditsProps) => {
  const [credits, setCredits] = useState(0)
  const [spent, setSpent] = useState(0)
  const [pendingSpend, setPendingSpend] = useState(0)
  const [received, setReceived] = useState(0)
  const [receivable, setReceivable] = useState(0)

  useEffect(() => {
    async function loadMyCredits() {
      const { data } = await getCredits()
      setCredits(data.credits || 0)
      setSpent(data.spent || 0)
      setPendingSpend(data.pendingSpend || 0)
      setReceivable(data.receivable || 0)
      setReceived(data.received || 0)
    }
    loadMyCredits()
  }, [])
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <AssociateHeader
          associate={HeaderProps.associate}
          credits={HeaderProps.credits}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
      <S.WrapperContent>
        <S.MyCredits>
          <MyCredits
            credits={credits}
            pendingSpend={pendingSpend}
            spent={spent}
            received={received}
            receivable={receivable}
          />
        </S.MyCredits>
        <S.RequestIncrease>
          <RequestCreditIncrease />
        </S.RequestIncrease>
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default MyCreditsTemplate
