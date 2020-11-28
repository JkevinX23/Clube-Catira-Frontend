import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 20rem;
  align-items: center;
`
export const Sub = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
  `}
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  margin: 2rem 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #c4c4c4;
`
export const Content = styled.div`
  align-self: flex-start;
  margin-left: 10%;
`
