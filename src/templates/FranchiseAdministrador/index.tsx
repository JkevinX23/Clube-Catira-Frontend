import HeaderDash from 'components/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'
import DashCardsMain from 'components/DashCardsMain'
import DashNewAssociate from 'components/DashNewAssociate'
import ReportCardDash from 'components/ReportCardDash'
import CardPendingOffDash from 'components/CardPendingOffDash'
import SidebarAdmin from 'components/Sidebar'

const Home = ({ name, role }: HomeAdminProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.WrapperCards>
          <DashCardsMain title="Associados" icon="associates" value="512" />
          <DashCardsMain
            title="Transações Pagas"
            icon="transactions"
            value="Ctz 32.412,10"
          />
          <DashCardsMain
            title="Transações Pendentes"
            icon="pending"
            value="Ctz 32.412,10"
          />
          <DashCardsMain title="Ofertas" icon="offers" value="431" />
        </S.WrapperCards>

        <S.WrapperReports>
          <S.DashNewAssociate>
            <DashNewAssociate
              associates={[
                { ref: 'Moc01 ', name: 'Joao kevin' },
                { ref: '277', name: 'Joao Rodrigues' }
              ]}
            />
          </S.DashNewAssociate>

          <S.DashNewAssociate>
            <ReportCardDash direct={32} pending={4} />
          </S.DashNewAssociate>
          <S.DashNewAssociate>
            <CardPendingOffDash
              associates={[{ associate: 'Kevin', franchise: 'Moc' }]}
            />
          </S.DashNewAssociate>
        </S.WrapperReports>
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
