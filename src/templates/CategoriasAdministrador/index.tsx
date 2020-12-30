import HeaderDash from 'components/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import TableCategories from 'templates/TablesAdmin/Categorias'

export default function CategoriasAdmin({ name, role }: HomeAdminProps) {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.Table>
          <TableCategories />
        </S.Table>
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}
