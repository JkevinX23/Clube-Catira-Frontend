import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} 2rem;
    justify-content: space-between;
  `}
`

export const Options = styled.ul`
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
  /* animation: fadeIn 0.2s;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    } */

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
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
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
      /* animation: fadeIn 0.4s;

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    } */
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
      right: -150%;
      width: 250%;
    }
  }
`
