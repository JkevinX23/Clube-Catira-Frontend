import HeaderDash from 'components/HeaderDash'
import TableFranchise from '../TablesAdmin/Franchise'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import { useState } from 'react'
import Button from 'components/Button'
import CreateOfferAdmin from 'components/CreateOfferAdministrador'
import OfferTable from 'templates/TablesAdmin/Offers'

const Home = ({ name, role }: HomeAdminProps) => {
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
            {!selector ? 'Cadastrar nova oferta' : 'Gerenciar Ofertas'}
          </Button>
        </S.ButtonChange>
        <S.CreateFranchise>
          {selector ? <CreateOfferAdmin /> : <OfferTable />}
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