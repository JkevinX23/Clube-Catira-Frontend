import HeaderDash from 'components/HeaderFranchise'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarFranchise from 'components/Franquia/Sidebar'

import IncreaseTable from 'templates/TablesFranchise/Increases'

const Home = ({ name, role }: HomeAdminProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.CreateFranchise>
          <S.Table>
            <IncreaseTable />
          </S.Table>
        </S.CreateFranchise>
      </S.WrapperContent>
      <SidebarFranchise />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
