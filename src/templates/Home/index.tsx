import AssociateHeader from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import CardOffers from 'components/CardOffers'
import FiltersOffers from 'components/FiltersOffers'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Footer from 'components/Footer'
import { useEffect, useState } from 'react'
import { HomeProps, GetOfferProps, Option } from 'Types'
import * as S from './styles'
import Button from 'components/Button'
import { useRouter } from 'next/router'

const Home = ({ HeaderProps, Products, Filters, isDirect }: HomeProps) => {
  const [produtos, setProdutos] = useState<GetOfferProps[]>()
  const [city, setCity] = useState('')
  const [associate, setAssociate] = useState<number>()
  const [citys, setCitys] = useState(Filters.citys)
  const [associates, setAssociates] = useState(Filters.associates)
  const [search, SetSearch] = useState('')

  const route = useRouter()

  useEffect(() => {
    function init() {
      setProdutos(Products)
    }
    init()
  }, [Products])

  useEffect(() => {
    if (!city && !associate) {
      if (Products.length <= 0) return
      if (search) {
        const resAss = []
        for (const prod of Products) {
          if (
            prod.Associated.fantasy_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.title.toLowerCase().includes(search.toLowerCase()) ||
            prod.description.toLowerCase().includes(search.toLowerCase())
          ) {
            resAss.push(prod)
            continue
          }
        }
        setProdutos(resAss)
        return
      }
      setProdutos(Products)
      return
    }
    const prodsAssociate = Products.filter(
      (value) => value.Associated.id === associate
    )
    const prodsCidade = Products.filter(
      (value) => value.Associated.Address.city === city
    )

    if (!city && associate) {
      if (search) {
        const resAss = []
        for (const prod of prodsAssociate) {
          if (
            prod.Associated.fantasy_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.Associated.company_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.title.toLowerCase().includes(search.toLowerCase()) ||
            prod.description.toLowerCase().includes(search.toLowerCase())
          ) {
            resAss.push(prod)
            continue
          }
        }
        setProdutos(resAss)
        return
      } else {
        setProdutos(prodsAssociate)
        return
      }
    }

    if (city && !associate) {
      if (search) {
        const resAss = []
        for (const prod of prodsCidade) {
          if (
            prod.Associated.fantasy_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.Associated.company_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.title.toLowerCase().includes(search.toLowerCase()) ||
            prod.description.toLowerCase().includes(search.toLowerCase())
          ) {
            resAss.push(prod)
            continue
          }
        }
        setProdutos(resAss)
        return
      } else {
        setProdutos(prodsCidade)
        return
      }
    }
    if (city && associate) {
      const prodFiltered = prodsCidade.filter((value) =>
        prodsAssociate.includes(value)
      )
      if (search) {
        const resAss = []
        for (const prod of prodFiltered) {
          if (
            prod.Associated.fantasy_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.Associated.company_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            prod.title.toLowerCase().includes(search.toLowerCase()) ||
            prod.description.toLowerCase().includes(search.toLowerCase())
          ) {
            resAss.push(prod)
            continue
          }
        }
        setProdutos(resAss)
        return
      } else {
        setProdutos(prodFiltered)
        return
      }
    }
  }, [associate, city, search, Products])

  useEffect(() => {
    const citisFiltered: Option[] = []
    const assFiltered: Option[] = []

    produtos?.map((off: GetOfferProps) => {
      citisFiltered
        .map(function (e) {
          return e.key
        })
        .indexOf(off.Associated.Address.city) === -1 &&
        citisFiltered.push({
          value: off.Associated.Address.city,
          key: off.Associated.Address.city
        })

      assFiltered
        .map(function (e) {
          return e.key
        })
        .indexOf(off.Associated.id) === -1 &&
        assFiltered.push({
          value: off.Associated.fantasy_name,
          key: off.Associated.id
        })
    })

    setCitys(citisFiltered)
    setAssociates(assFiltered)
  }, [produtos])

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
      <S.WrapperBreadcrumbs>
        <S.Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="large" />}
            aria-label="breadcrumb"
          >
            <Link href="/home-associado">Home</Link>
            {!isDirect ? (
              <Typography color="textPrimary">Ofertas</Typography>
            ) : (
              <Typography color="textPrimary">Ofertas Diretas</Typography>
            )}
          </Breadcrumbs>
        </S.Breadcrumbs>
      </S.WrapperBreadcrumbs>

      <S.WrapperContent>
        <S.Button>
          <Button
            size="xxsmall"
            background="blue"
            onClick={() => route.push('/create-offer')}
          >
            Criar Oferta
          </Button>
        </S.Button>
        <S.SearchWrapper>
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar.."
            onChange={(e) => SetSearch(e.target.value)}
          />
        </S.SearchWrapper>
        <FiltersOffers
          citys={citys}
          associates={associates}
          setCity={setCity}
          setAssociate={setAssociate}
        />
        <S.WrapperCards>
          {produtos && produtos?.length > 0 ? (
            produtos.map((prod) => {
              return (
                <CardOffers
                  key={prod.id}
                  id={prod.id}
                  associateId={prod.Associated.id}
                  associate={prod.Associated.fantasy_name}
                  city={prod.Associated.Address.city}
                  value={prod.value_offer}
                  state={prod.Associated.Address.state}
                  name={prod.title}
                  img={prod.File.url}
                  title={prod.title}
                  isDirect={isDirect}
                />
              )
            })
          ) : (
            <S.Text>Nenhuma oferta encontrada</S.Text>
          )}
        </S.WrapperCards>
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
