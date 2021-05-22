import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
`
export const HomeSectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
type MenuProps = {
  position: number
}
export const MenuWrapper = styled.div<MenuProps>`
  ${({ position }) => css`
    position: fixed;
    opacity: ${position !== 0 ? 1 : 0.8};

    background-color: ${position !== 0
      ? 'rgba(250, 250, 250, 1)'
      : 'rgba(250, 250, 240, 0.8)'};
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  `}
`
export const SobrepositionWrapper = styled.div`
  position: relative;
`

export const WhatsSectionWrapper = styled.div`
  padding-top: 100vh;
`

export const HowWorksWrapper = styled.div`
  ${media.lessThan('medium')`
    margin-top: 30rem;
  `}
`
