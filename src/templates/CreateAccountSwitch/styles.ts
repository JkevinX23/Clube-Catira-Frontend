import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.colors.gray} 0%,
      rgba(250, 250, 250, 1) 100%
    );
  `}
`

type DecorationProps = {
  isPrimary?: boolean
}
export const DecorationLineWrapper = styled.div<DecorationProps>`
  ${({ theme, isPrimary }) => css`
    display: flex;
    align-content: center;
    margin: 5px auto;
    content: '';
    width: ${isPrimary ? '8rem' : '5rem'};
    height: 2px;
    background: ${theme.colors.black};
    position: relative;
    margin-bottom: ${!isPrimary ? '20px' : '0px'};
  `}
`
export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;
`
export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const Footer = styled.footer`
  margin-top: 8vw;
`

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  gap: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
`
