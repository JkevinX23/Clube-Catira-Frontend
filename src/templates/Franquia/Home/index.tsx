import HeaderDash from 'components/HeaderFranchise'
import Footer from 'components/Footer'
import { HomeDashAdminProps } from 'Types'
import * as S from './styles'
import DashCardsMain from 'components/DashCardsMain'
import DashNewAssociate from 'components/DashNewAssociate'
import ReportCardDash from 'components/ReportCardDash'
import CardPendingOffDash from 'components/CardPendingOffDash'
import SidebarFranchise from 'components/Franquia/Sidebar'
import AdjustmentsCard from 'components/DashboardAdjustments'
import DocumentsReportFranchise from 'components/Franquia/DashboardDocuments'

const HomeFranchise = ({ name, role, page_data }: HomeDashAdminProps) => {
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
        <S.Row>
          <DocumentsReportFranchise />
          <AdjustmentsCard />
        </S.Row>
      </S.WrapperContent>
      <SidebarFranchise />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default HomeFranchise
