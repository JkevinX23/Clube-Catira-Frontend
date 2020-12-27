import HeaderDash from 'components/HeaderDash'
import AssociatesTable from '../TablesAdmin/Associates'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import CreateAssociate from 'templates/CreateAssociate'
import { useState } from 'react'
import Button from 'components/Button'

const AssociatesAdmin = ({ name, role }: HomeAdminProps) => {
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
            {!selector ? 'Cadastrar novo associado' : 'Gerenciar Associados'}
          </Button>
        </S.ButtonChange>
        <S.CreateFranchise>
          {selector ? <CreateAssociate /> : <AssociatesTable />}
        </S.CreateFranchise>
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default AssociatesAdmin
