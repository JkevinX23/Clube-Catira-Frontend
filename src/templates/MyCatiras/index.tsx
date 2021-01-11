import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import MyCatirasTable from 'templates/TablesAssociate/MyOffers'
import * as S from './styles'

export type MyCatirasProps = {
  HeaderProps: AssociateHeaderProps
}

const MyCatiras = ({ HeaderProps }: MyCatirasProps) => {
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
        <MyCatirasTable />
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default MyCatiras
