/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './styles'
import Menu from 'components/Menu'
import AssociateComponent from 'components/Associates'
import { useState } from 'react'
import { MenuProps } from 'utils/types'
import SociaisSection from 'components/SociaisSection'
import Footer from 'components/Footer'
import CardAssociates, { CardAssociatesProps } from 'components/CardAssociates'

export type AssociateProps = {
  MenuProps?: MenuProps
}

const Associates = ({ MenuProps }: AssociateProps) => {
  const [citys, setCitys] = useState([])
  const [associates, setAssociates] = useState([])

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu />
      </S.MenuWrapper>

      <AssociateComponent />

      {associates.length > 0 && (
        <S.ContentWrapper>
          <S.TextWrapper>Associados</S.TextWrapper>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />

          <S.Grid>
            {associates.map((associate: CardAssociatesProps, i) => (
              <CardAssociates
                key={i}
                city={associate.city}
                name={associate.name}
                img={associate.img}
                state={associate.state}
              />
            ))}
          </S.Grid>
        </S.ContentWrapper>
      )}
      <SociaisSection />

      <Footer />
    </S.Wrapper>
  )
}

export default Associates
