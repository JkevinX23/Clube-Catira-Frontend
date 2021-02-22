import HeaderDash from 'components/Consultant/HeaderDash'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import Sidebar from 'components/Consultant/Sidebar'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import OfferTable from 'templates/TablesConsultant/Offers'
import ShowOffer from 'templates/Show/Consultant/Offer'

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
          {selector !== 1 && (
            <Button
              radius="radius100"
              background="green"
              onClick={handleChange}
            >
              Voltar
            </Button>
          )}
        </S.ButtonChange>
        {selector === 1 ? (
          <S.Table>
            <OfferTable setId={setId} />
          </S.Table>
        ) : (
          <S.CreateFranchise>
            <ShowOffer id={id} />
          </S.CreateFranchise>
        )}
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default OfferAdmin
