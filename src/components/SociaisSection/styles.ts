import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`
export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
  gap: 20%;
`
