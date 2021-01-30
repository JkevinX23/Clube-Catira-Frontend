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

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await GetAssociates()
      setAllAssociates(data)
      setAssociates(data)

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
    if (filter === 'none') {
      setAssociates(allAssociates)
      return
    }
    const associates_selecteds = allAssociates.map((ass: GetAssociatesAuth) => {
      if (`${ass.Address.city}/${ass.Address.state}` === filter) return ass
    })
    setAssociates(associates_selecteds)
  }, [filter])

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <AssociateHeader
          associate={HeaderProps.associate}
          credits={HeaderProps.credits}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
      <AssociateComponent citys={citys} setFilter={setFilter} />

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
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default ListAssociatesDetails
