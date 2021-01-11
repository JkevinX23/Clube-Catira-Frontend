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
            <li>Ofertas Diretas</li>
            <li>Orcamentos de compras</li>
            <li>Orcamentos de vendas</li>
            <Link href="/associado/compra-venda">
              <li>Compra/Venda</li>
            </Link>
          </S.Options>
        </S.MenuLink>
        <S.MenuLink>Associados</S.MenuLink>
        <S.MenuLink>Créditos</S.MenuLink>
      </S.MenuNav>
    </S.Wrapper>
  )
}

export default AssociateMenu
