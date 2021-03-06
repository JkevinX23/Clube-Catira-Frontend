import HeaderDash from 'components/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import CreateOfferAdmin from 'components/CreateOfferAdministrador'
import OfferTable from 'templates/TablesAdmin/Offers'
import ShowOffer from 'templates/Show/Administrador/Offer'

const OfferAdmin = ({ name, role }: HomeAdminProps) => {
  const [selector, setSelector] = useState(1)
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    if (id !== 0) {
      setSelector(3)
    }
  }, [id])

  function handleChange() {
    setSelector(1)
    setId(0)
  }
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.ButtonChange>
          {selector === 1 ? (
            <Button
              radius="radius100"
              background="green"
              onClick={() => setSelector(2)}
            >
              Cadastrar nova oferta
            </Button>
          ) : selector === 2 ? (
            <Button
              radius="radius100"
              background="green"
              onClick={() => setSelector(1)}
            >
              Gerenciar Ofertas
            </Button>
          ) : (
            <Button
              radius="radius100"
              background="green"
              onClick={handleChange}
            >
              Voltar
            </Button>
          )}
        </S.ButtonChange>
        {selector === 2 ? (
          <S.CreateFranchise>
            <CreateOfferAdmin />
          </S.CreateFranchise>
        ) : selector === 1 ? (
          <S.Table>
            <OfferTable setId={setId} />
          </S.Table>
        ) : (
          <S.CreateFranchise>
            <ShowOffer id={id} />
          </S.CreateFranchise>
        )}
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default OfferAdmin
