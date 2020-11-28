import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    max-width: 36rem;
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
  font-size: 3rem;
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
