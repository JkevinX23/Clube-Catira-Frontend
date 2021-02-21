import HeaderDash from 'components/HeaderFranchise'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'
import Sidebar from 'components/Franquia/Sidebar'
import Profile from 'templates/Show/Franchise/Profile'

const Home = ({ name, role }: HomeAdminProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.CreateFranchise>
          <Profile />
        </S.CreateFranchise>
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
