import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import * as S from './styles'
import AssociateMenu from 'components/AssociateMenu'
import AssociateComponent from 'components/AssociatesFilterDetails'
import { useEffect, useState } from 'react'
import Footer from 'components/Footer'
import CardAssociates from 'components/CardAssociates'
import { GetAssociates } from 'Context/Action/Associates'
import { GetAssociatesAuth } from 'Types'

type PageProps = {
  HeaderProps: AssociateHeaderProps
}
const ListAssociatesDetails = ({ HeaderProps }: PageProps) => {
  const [citys, setCitys] = useState<string[]>([])
  const [associates, setAssociates] = useState<any>([])
  const [allAssociates, setAllAssociates] = useState<any>([])
  const [filter, setFilter] = useState('')
  const [search, SetSearch] = useState('')

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await GetAssociates()

      const order = data.sort(function (a, b) {
        if (a.fantasy_name.toLowerCase() > b.fantasy_name.toLowerCase()) {
          return 1
        }
        if (a.fantasy_name.toLowerCase() < b.fantasy_name.toLowerCase()) {
          return -1
        }
        return 0
      })
      setAllAssociates(order)
      setAssociates(order)

      const cidades: string[] = []
      data.map((ass) => {
        if (
          cidades.indexOf(`${ass.Address.city}/${ass.Address.state}`) === -1
        ) {
          cidades.push(`${ass.Address.city}/${ass.Address.state}`)
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

    const associates_selecteds: GetAssociatesAuth[] = []
    allAssociates.forEach((ass: any) => {
      if (`${ass.Address.city}/${ass.Address.state}` === filter) {
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
      <S.WrapperHeader>
        <AssociateHeader
          associate={HeaderProps.associate}
          credits={HeaderProps.credits}
          limit={HeaderProps.limit}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
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
              (associate: GetAssociatesAuth) =>
                associate && (
                  <CardAssociates
                    id={associate.id}
                    key={associate.id}
                    city={associate.Address.city}
                    name={associate.fantasy_name}
                    img={associate.File.url}
                    state={associate.Address.state}
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
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ListAssociatesDetails
