import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  border-left: 2px solid #ff4a43;
  position: relative;
  padding-bottom: 12px;
  margin-left: 1rem;
  padding: 1rem 1.5rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.6rem;
    height: 1rem;
    width: 1rem;
    border-radius: 0.5rem;
    background: #ff4a43;
  }
`
export const Sub = styled.p`
  ${({ theme }) => css`
    color: #333;
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const Title = styled.p`
  ${({ theme }) => css`
    color: #333;
    font-size: ${theme.font.sizes.small};
  `}
`
export const FunctionsWrapper = styled.div`
  ${({ theme }) => css`
    color: #333;
    font-size: 1rem;
    a {
      color: ${theme.colors.blue};
      cursor: pointer;
    }
  `}
`
