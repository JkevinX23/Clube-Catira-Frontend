import HeaderDash from 'components/Consultant/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'
import Sidebar from 'components/Consultant/Sidebar'
import Profile from 'templates/Show/Consultant/Profile'

const ProfileTemplate = ({ name, role }: HomeAdminProps) => {
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

export default ProfileTemplate
