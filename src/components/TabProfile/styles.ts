import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const NavButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: ${theme.colors.gray2};
    margin-right: 2px;
    color: #1f1f1f;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    padding: 1em 2em;
    display: block;
    text-decoration: none;
    outline: none;
    border-radius: 6px 6px 0px 0px;

    &:hover {
      background: ${theme.colors.gray};
      color: #7c7c7c;
    }
    &:active {
      background: ${theme.colors.gray};
      color: #7c7c7c;
    }
  `}
`

export const WrapperContent = styled.div``
export const WrapperNav = styled.div`
  display: flex;
`
