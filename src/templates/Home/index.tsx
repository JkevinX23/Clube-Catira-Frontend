import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import CardOffers from 'components/CardOffers'
import FiltersOffers from 'components/FiltersOffers'
import Footer from 'components/Footer'
import { useEffect, useState } from 'react'
import { ProdTypes } from 'utils/types'
import * as S from './styles'

export type HomeProps = {
  HeaderProps: AssociateHeaderProps
  Products: ProdTypes[]
}

const Home = ({ HeaderProps, Products }: HomeProps) => {
  const [produtos, setProdutos] = useState<ProdTypes[]>([])

  useEffect(() => {
    function init() {
      setProdutos(Products)
    }
    init()
  }, [Products])

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
        <FiltersOffers />
        <S.WrapperCards>
          {produtos.map((prod) => (
            <CardOffers
              key={prod.id}
              associate={prod.associate}
              city={prod.city}
              value={prod.value}
              state={prod.state}
              name={prod.name}
              img={prod.img}
              title={prod.title}
            />
          ))}
        </S.WrapperCards>
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default Home
