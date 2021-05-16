import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} 2rem;
    justify-content: space-between;
    background-color: #f9fafa;
  `}
`

export const Options = styled.ul<LinkProps>`
  ${({ theme, redPoint }) => css`
    display: none;
    position: absolute;
    background: #00aaff;
    margin: 1%;
    margin-top: 0.2rem;
    padding: 1rem;
    color: white;
    list-style: none;
    border-radius: 0px 0px 0px 9px;
    z-index: 20;

    li {
      padding: 0.5rem;
      cursor: pointer;
      font-size: 1.4rem;
      white-space: nowrap;

      &:hover {
        border-bottom: 2px solid white;
        font-weight: bold;
      }
    }
    li:nth-child(1):before {
      content: '*';
      color: red;
      display: ${!redPoint ? 'none' : 'inline'};
    }
  `}
`

type LinkProps = {
  redPoint?: boolean
}

export const MenuLink = styled.a<LinkProps>`
  ${({ theme, redPoint }) => css`
    position: relative;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    padding: 1rem;

    &:hover {
      color: white;
      background: #00aaff;
      border-radius: 8px 8px 0px 0px;
    }

    &::after {
      content: '*';
      color: red;
      display: ${!redPoint ? 'none' : 'inline'};
    }
  `}
`
export const MenuNav = styled.div`
  a:hover {
    ul {
      display: block;
    }
  }
  ${MenuLink}:nth-child(1) {
    ${Options} {
      right: -59%;
      width: 158%;
    }
  }

  ${MenuLink}:nth-child(2) {
    ${Options} {
      right: -151%;
      width: 250%;
    }
  }
`

type MenufullProps = {
  isOpen: boolean
}
export const MenuFull = styled.nav<MenufullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: 15;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 4rem;
      height: 4rem;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;

      ${MenuLink}:nth-child(1) {
        ${Options} {
          right: 0;
          width: 120%;
        }
      }

      ${MenuLink}:nth-child(2) {
        ${Options} {
          right: 0%;
          width: 120%;
        }
        a:hover {
          ul {
            display: flex;
          }
        }
      }

      ${Options} {
        position: relative;
        background: #fff;
        color: #444;
      }
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
      &:hover {
        color: ${theme.colors.black};
        background: ${theme.colors.white};
        border-radius: 8px 8px 0px 0px;
        &::after {
          background-color: ${theme.colors.orange};
        }
      }
    }
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    width: 4rem;
    height: 4rem;
    cursor: pointer;
  `}
`
export const Logo = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    img {
      max-width: 70%;
    }
  }
`
