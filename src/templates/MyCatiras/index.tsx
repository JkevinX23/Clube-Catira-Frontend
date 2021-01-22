import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import { useState } from 'react'
import MyCatirasTable from 'templates/TablesAssociate/Catiras'
import TableListVouchers from 'templates/TablesAssociate/Vouchers'
import * as S from './styles'

export type MyCatirasProps = {
  HeaderProps: AssociateHeaderProps
}

const MyCatiras = ({ HeaderProps }: MyCatirasProps) => {
  const [transaction_id, setTrasnsactionId] = useState(0)
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
        {transaction_id !== 0 ? (
          <TableListVouchers
            setTrasnsactionId={setTrasnsactionId}
            id={transaction_id}
          />
        ) : (
          <MyCatirasTable setTrasnsactionId={setTrasnsactionId} />
        )}
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default MyCatiras
