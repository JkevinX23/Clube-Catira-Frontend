import Logo from 'components/Logo'
import * as S from './styles'

const AssociateMenu = () => (
  <S.Wrapper>
    <Logo />
    <S.MenuNav>
      <S.MenuLink>Ofertas</S.MenuLink>
      <S.MenuLink>Catiras</S.MenuLink>
      <S.MenuLink>Associados</S.MenuLink>
      <S.MenuLink>Créditos</S.MenuLink>
    </S.MenuNav>
  </S.Wrapper>
)

export default AssociateMenu
