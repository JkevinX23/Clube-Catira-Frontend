import HeaderDash from 'components/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import Sidebar from 'components/Franquia/Sidebar'
import TransactionsTable from 'templates/TablesFranchise/Transactions'

const FranchiseTransaction = ({ name, role }: HomeAdminProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.Table>
          <TransactionsTable />
        </S.Table>
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default FranchiseTransaction
