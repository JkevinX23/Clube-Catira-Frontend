import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 20rem;
    padding: 2rem;
    max-width: 36rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
  `}
`
export const WrapperInfo = styled.div`
  display: flex;
  width: 80%;
  max-width: 30rem;
  justify-content: space-between;
  margin-top: 1rem;
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  margin: 2rem 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #c4c4c4;
`
export const Sub = styled.p``

type LeadProps = {
  direct?: boolean
}
export const Lead = styled.p<LeadProps>`
  ${({ theme, direct }) => css`
    background: ${direct ? theme.colors.orange : theme.colors.danger};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 0.2rem;
    border-radius: 8px 0px 8px 0px;
  `}
`
