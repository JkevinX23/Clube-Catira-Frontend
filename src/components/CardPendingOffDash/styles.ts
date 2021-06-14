import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 35rem;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
    height: 40rem;
  `}
`
export const Sub = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: 2rem;
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
