import Logo from 'components/Logo'
import Link from 'next/link'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/feather/Menu'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AssociateMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Logo>
        <Logo />
      </S.Logo>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <MediaMatch greaterThan="large">
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
            <S.MenuLink>Extrato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
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
            <S.MenuLink>Extrato</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default AssociateMenu
