import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  border-left: 4px solid #ff4a43;
  position: relative;
  padding-bottom: 24px;
  margin-left: 2rem;
  padding: 2rem 1.5rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.8rem;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    background: #ff4a43;
  }
`
export const Sub = styled.p`
  color: #333;
  font-size: 1.5rem;
`
export const Title = styled.p`
  ${({ theme }) => css`
    color: #333;
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const FunctionsWrapper = styled.div`
  ${({ theme }) => css`
    color: #333;
    font-size: 1.2rem;
    padding-top: 0.3rem;

    a {
      color: ${theme.colors.blue};
      cursor: pointer;
    }
  `}
`
