import HeaderDash from 'components/HeaderDash'
import TableConsultant from '../TablesAdmin/Consultant'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import CreateConsultant from 'templates/CreateConsultant'
import { useState } from 'react'
import Button from 'components/Button'

const ConsultantAdmin = ({ name, role }: HomeAdminProps) => {
  const [selector, setSelector] = useState(false)
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.ButtonChange>
          <Button
            radius="radius100"
            background="green"
            onClick={() => setSelector(!selector)}
          >
            {!selector ? 'Cadastrar novo consultor' : 'Gerenciar Consultores'}
          </Button>
        </S.ButtonChange>
        <S.CreateFranchise>
          {selector ? <CreateConsultant /> : <TableConsultant />}
        </S.CreateFranchise>
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ConsultantAdmin
