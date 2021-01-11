import AssociateHeader from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import CardOffers from 'components/CardOffers'
import FiltersOffers from 'components/FiltersOffers'
import Footer from 'components/Footer'
import { useEffect, useState } from 'react'
import { HomeProps, GetOfferProps } from 'Types'
import * as S from './styles'

const Home = ({ HeaderProps, Products, Filters }: HomeProps) => {
  const [produtos, setProdutos] = useState<GetOfferProps[]>()
  const [city, setCity] = useState('')
  const [associate, setAssociate] = useState('-1')

  useEffect(() => {
    function init() {
      setProdutos(Products)
      console.log(Products)
    }
    init()
  }, [Products])

  useEffect(() => {
    if (!city || Number(city) < 1) {
      setProdutos(Products)
      return
    }
    const prods = Products.filter(
      (value) => value.Associated.Address.city === city
    )
    setProdutos(prods)
  }, [city, Products])

  useEffect(() => {
    if (!associate || Number(associate) < 1) {
      setProdutos(Products)
      return
    }
    const prods = Products.filter(
      (value) => value.Associated.id === Number(associate)
    )
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
      <S.WrapperContent>
        <FiltersOffers
          citys={Filters.citys}
          associates={Filters.associates}
          setCity={setCity}
          setAssociate={setAssociate}
        />
        <S.WrapperCards>
          {produtos &&
            produtos.map((prod) => {
              console.log(prod)
              return (
                <CardOffers
                  key={prod.id}
                  id={prod.id}
                  associate={prod.Associated.fantasy_name}
                  city={prod.Associated.Address.city}
                  value={prod.value_offer}
                  state={prod.Associated.Address.state}
                  name={prod.title}
                  img={prod.File.url}
                  title={prod.title}
                />
              )
            })}
        </S.WrapperCards>
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
