import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/feather/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">O Clube</S.MenuLink>
          <S.MenuLink href="#">Como Funciona</S.MenuLink>
          <S.MenuLink href="#">Associados</S.MenuLink>
          <Button size="xxsmall" background="blue" radius="radius300">
            {!username ? 'Minha Conta' : 'Login'}
          </Button>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">O Clube</S.MenuLink>
          <S.MenuLink href="#">Como Funciona</S.MenuLink>
          <S.MenuLink href="#">Associados</S.MenuLink>
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button
              fullWidth
              size="xxsmall"
              background="orange"
              radius="radius100"
            >
              Login
            </Button>
            <span> ou </span>
            <S.CreateAccount href="#" title="Sign In">
              Cadastre-se
            </S.CreateAccount>
          </S.RegisterBox>
        )}
        {!!username && (
          <>
            <S.RegisterBox>
              <Button
                fullWidth
                size="xxsmall"
                background="orange"
                radius="radius100"
              >
                Minha Conta
              </Button>
            </S.RegisterBox>
          </>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
