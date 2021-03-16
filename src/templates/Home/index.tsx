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
import { HomeProps, GetOfferProps } from 'Types'
import * as S from './styles'

const Home = ({ HeaderProps, Products, Filters, isDirect }: HomeProps) => {
  const [produtos, setProdutos] = useState<GetOfferProps[]>()
  const [city, setCity] = useState('')
  const [associate, setAssociate] = useState(-1)

  useEffect(() => {
    function init() {
      setProdutos(Products)
    }
    init()
  }, [Products])

  useEffect(() => {
    if (!city || Number(city) < 1) {
      setProdutos(Products)
      return
    }

    if (city === 'none') {
      setProdutos(Products)
      return
    }
    const prods = Products.filter(
      (value) => value.Associated.Address.city === city
    )
    setProdutos(prods)
  }, [city, Products])

  useEffect(() => {
    if (!associate || associate < 1) {
      setProdutos(Products)
      return
    }
    const prods = Products.filter((value) => value.Associated.id === associate)
    setProdutos(prods)
  }, [associate, Products])

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
        <FiltersOffers
          citys={Filters.citys}
          associates={Filters.associates}
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
