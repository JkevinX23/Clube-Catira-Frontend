import React, { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/feather/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
  handleChange: (newValue: string) => void
}

const Menu = ({ handleChange, username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function setRef(value: number) {
    switch (value) {
      case 1:
        handleChange('sectionHomeRef')
        return
      case 2:
        handleChange('sectionOClubeRef')
        return
      case 3:
        handleChange('sectionComoFuncionaRef')
        return
    }
  }

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>

      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="large">
        <S.MenuNav>
          <S.MenuLink onClick={() => setRef(1)}>Home</S.MenuLink>
          <S.MenuLink onClick={() => setRef(2)}>O Clube</S.MenuLink>
          <S.MenuLink onClick={() => setRef(3)}>Como Funciona</S.MenuLink>
          <S.MenuLink>Associados</S.MenuLink>
          <Button size="xxsmall" background="blue" radius="radius300">
            {username ? 'Minha Conta' : 'Login'}
          </Button>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>O Clube</S.MenuLink>
          <S.MenuLink>Como Funciona</S.MenuLink>
          <S.MenuLink>Associados</S.MenuLink>
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
            <S.CreateAccount title="Sign In">Cadastre-se</S.CreateAccount>
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
