import HeaderDash from 'components/HeaderFranchise'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'
import { useState } from 'react'
import TableListVouchers from 'templates/TablesFranchise/Vouchers'
import TransactionsTable from 'templates/TablesFranchise/Transactions'
import Sidebar from 'components/Franquia/Sidebar'

const FranchiseTransaction = ({ name, role }: HomeAdminProps) => {
  const [transaction_id, setTrasnsactionId] = useState(0)

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.Table>
          {transaction_id !== 0 ? (
            <TableListVouchers
              setTrasnsactionId={setTrasnsactionId}
              id={transaction_id}
            />
          ) : (
            <TransactionsTable setTrasnsactionId={setTrasnsactionId} />
          )}
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
