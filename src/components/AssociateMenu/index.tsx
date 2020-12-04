import Logo from 'components/Logo'
import * as S from './styles'

const AssociateMenu = () => (
  <S.Wrapper>
    <Logo />
    <S.MenuNav>
      <S.MenuLink>
        Ofertas
        <S.Options>
          <li>Ofertas</li>
          <li>Criar Ofertas</li>
          <li>Minhas Ofertas</li>
        </S.Options>
      </S.MenuLink>

      <S.MenuLink>
        Catiras
        <S.Options>
          <li>Ofertas Diretas</li>
          <li>Orcamentos de compras</li>
          <li>Orcamentos de vendas</li>
          <li>Compra/Venda</li>
        </S.Options>
      </S.MenuLink>
      <S.MenuLink>Associados</S.MenuLink>
      <S.MenuLink>Créditos</S.MenuLink>
    </S.MenuNav>
  </S.Wrapper>
)

export default AssociateMenu
