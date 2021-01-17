/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './styles'
import Menu from 'components/Menu'
import AssociateComponent from 'components/AssociatesFilter'
import { useEffect, useState } from 'react'
import { MenuProps } from 'utils/types'
import SociaisSection from 'components/SociaisSection'
import Footer from 'components/Footer'
import CardAssociates, { CardAssociatesProps } from 'components/CardAssociates'
import { GetAssociatesNA } from 'Context/Action/Associates'
import { GetAssociatesNoAuth } from 'Types'

export type AssociateProps = {
  MenuProps?: MenuProps
}

const Associates = ({ MenuProps }: AssociateProps) => {
  const [citys, setCitys] = useState<string[]>([])
  const [associates, setAssociates] = useState<any>([])
  const [allAssociates, setAllAssociates] = useState<any>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await GetAssociatesNA()
      setAllAssociates(data)

      const cidades: string[] = []
      data.map((ass) => {
        if (cidades.indexOf(`${ass.city}/${ass.state}`) === -1) {
          cidades.push(`${ass.city}/${ass.state}`)
        }
      })
      setCitys(cidades)
    }
    loadAssociates()
  }, [])

  useEffect(() => {
    const associates_selecteds = allAssociates.map(
      (ass: GetAssociatesNoAuth) => {
        if (`${ass.city}/${ass.state}` === filter) return ass
      }
    )
    setAssociates(associates_selecteds)
  }, [filter])

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu />
      </S.MenuWrapper>

      <AssociateComponent citys={citys} setFilter={setFilter} />

      {associates.length > 0 && (
        <S.ContentWrapper>
          <S.TextWrapper>Associados</S.TextWrapper>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />

          <S.Grid>
            {associates.map((associate: GetAssociatesNoAuth) => (
              <CardAssociates
                key={associate.id}
                city={associate.city}
                name={associate.fantasy_name}
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
