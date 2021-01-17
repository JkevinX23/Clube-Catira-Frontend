import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const AssociateMenu = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.MenuNav>
        <S.MenuLink>
          Ofertas
          <S.Options>
            <Link href="/home-associado">
              <li>Ofertas</li>
            </Link>
            <Link href="/create-offer">
              <li>Criar Ofertas</li>
            </Link>

            <Link href="/associado/minhas-ofertas">
              <li>Minhas Ofertas</li>
            </Link>
          </S.Options>
        </S.MenuLink>

        <S.MenuLink>
          Catiras
          <S.Options>
            <Link href="/associado/ofertas-direcionadas">
              <li>Ofertas Diretas</li>
            </Link>

            <Link href="/associado/compra-venda">
              <li>Compra/Venda</li>
            </Link>
          </S.Options>
        </S.MenuLink>
        <Link href="/associado/associados">
          <S.MenuLink>Associados</S.MenuLink>
        </Link>

        <Link href="/associado/meus-creditos">
          <S.MenuLink>Créditos</S.MenuLink>
        </Link>
      </S.MenuNav>
    </S.Wrapper>
  )
}

export default AssociateMenu
