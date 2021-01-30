import HeaderDash from 'components/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import IncreaseTable from 'templates/TablesAdmin/Increases'

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
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
