import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  max-width: 30rem;
  max-height: 60rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.47);
  border-radius: 5px 5px 0px 0px;
  margin: 0 auto;
`
export const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: right;
    padding-left: 1rem;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    p {
      font-weight: normal;
      color: ${theme.colors.black};
      &:nth-child(2) {
        font-weight: ${theme.font.bold};
      }
    }
  `}
`
export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
  `}
`
export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlue};
    width: 100%;
    border-radius: 5px 5px 0 0;
    padding: 10px 15px;
  `}
`
