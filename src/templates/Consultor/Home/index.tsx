import HeaderDash from 'components/Consultant/HeaderDash'
import Footer from 'components/Footer'
import { HomeDashAdminProps as HomeProps } from 'Types'
import * as S from './styles'
import DashCardsMain from 'components/DashCardsMain'
import DashNewAssociate from 'components/DashNewAssociate'
import ReportCardDash from 'components/ReportCardDash'
import CardPendingOffDash from 'components/Consultant/CardPendingOffs'
import Sidebar from 'components/Consultant/Sidebar'

const HomeConsultant = ({ name, role, page_data }: HomeProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.WrapperCards>
          <DashCardsMain
            title="Associados"
            icon="associates"
            value={page_data && `${page_data.qtd_associates}`}
          />
          <DashCardsMain
            title="Transações Pagas"
            icon="transactions"
            value={page_data && `Ctz ${page_data.paid}`}
          />
          <DashCardsMain
            title="Transações Pendentes"
            icon="pending"
            value={page_data && `Ctz ${page_data.pending}`}
          />
          <DashCardsMain
            title="Ofertas"
            icon="offers"
            value={page_data && `${page_data.qtd_offers}`}
          />
        </S.WrapperCards>

        <S.WrapperReports>
          <S.DashNewAssociate>
            <DashNewAssociate associates={page_data.new_associates} />
          </S.DashNewAssociate>

          <S.DashNewAssociate>
            <ReportCardDash
              direct={page_data.paid_vouchers}
              pending={page_data.pending_vouchers}
            />
          </S.DashNewAssociate>
          <S.DashNewAssociate>
            <CardPendingOffDash pending_offers={page_data.pending_offers} />
          </S.DashNewAssociate>
        </S.WrapperReports>
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default HomeConsultant
