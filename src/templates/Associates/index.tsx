/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './styles'
import Menu from 'components/Menu'
import AssociateComponent from 'components/AssociatesFilter'
import { useEffect, useState } from 'react'
import { MenuProps } from 'utils/types'
import SociaisSection from 'components/SociaisSection'
import Footer from 'components/Footer'
import CardAssociates, {
  CardAssociatesProps
} from 'components/CardAssociatesNA'
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
  const [search, SetSearch] = useState('')

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
    if (!filter) {
      const resAss = []
      if (search) {
        for (const ass of allAssociates) {
          if (ass.fantasy_name.toLowerCase().includes(search.toLowerCase())) {
            resAss.push(ass)
            continue
          }
        }
        setAssociates(resAss)
      } else {
        setAssociates(allAssociates)
      }
      return
    }

    const associates_selecteds: GetAssociatesNoAuth[] = []
    allAssociates.forEach((ass: any) => {
      if (`${ass.city}/${ass.state}` === filter) {
        associates_selecteds.push(ass)
      }
    })

    if (associates_selecteds.length < 1) {
      setAssociates([])
      return
    }
    const resAss = []
    if (search) {
      for (const ass of associates_selecteds) {
        console.log({ ass })
        if (ass.fantasy_name.toLowerCase().includes(search.toLowerCase())) {
          resAss.push(ass)
        }
      }
      setAssociates(resAss)
      return
    }

    setAssociates(associates_selecteds)
  }, [allAssociates, filter, search])

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu />
      </S.MenuWrapper>

      <S.TextWrapper>Associados</S.TextWrapper>
      <S.DecorationLineWrapper isPrimary />
      <S.DecorationLineWrapper />

      <S.FiltersWrapper>
        <S.SearchWrapper>
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar.."
            onChange={(e) => SetSearch(e.target.value)}
          />
        </S.SearchWrapper>
        <div className="selectCity">
          <AssociateComponent citys={citys} setFilter={setFilter} />
        </div>
      </S.FiltersWrapper>
      {!!associates && associates.length > 0 && (
        <S.ContentWrapper>
          <S.Grid>
            {associates.map(
              (associate: GetAssociatesNoAuth) =>
                associate && (
                  <CardAssociates
                    key={associate.id}
                    city={associate.city}
                    name={associate.fantasy_name}
                    img={associate.img}
                    state={associate.state}
                  />
                )
            )}
          </S.Grid>
        </S.ContentWrapper>
      )}

      {associates.length < 1 && (
        <S.ContentWrapper>
          <S.TextWrapper>Nenhum associado encontrado</S.TextWrapper>
        </S.ContentWrapper>
      )}
      <SociaisSection />

      <Footer />
    </S.Wrapper>
  )
}

export default Associates
