import styled, { css } from 'styled-components'

export const SelectWrapper = styled.select`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0.5rem;
    position: relative;
    margin: 0 auto;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    width: 35%;
  `}
`

export const Button = styled.div``
export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 62rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    select {
      width: 80%;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    ${Button} {
      width: 100%;
      padding-left: 10%;
      button {
        width: 90%;
      }
    }
  }
`
