import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 500px;
    width: 100%;
    display: flex;
  `}
`
export const ImageWrapper = styled.img`
  width: 50rem;
  height: 46.8rem;
`

type TextProps = {
  isTitle?: boolean
}

export const TextContainerWrapper = styled.div<TextProps>`
  ${({ theme }) => css`
    background: ${theme.colors.green};
    margin-top: 6rem;
    margin-bottom: 3rem;
    padding: 2rem;
    display: block;
    height: 34rem;
    width: 70rem;
    position: relative;
    right: 2rem;
  `}
`
export const TextWrapper = styled.p<TextProps>`
  ${({ theme, isTitle }) => css`
    font-size: ${!isTitle ? theme.font.sizes.small : theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    padding-bottom: 2rem;
    text-align: center;
  `}
`
export const TextBold = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`

type DecorationProps = {
  isPrimary?: boolean
}

export const DecorationLineWrapper = styled.div<DecorationProps>`
  ${({ isPrimary }) => css`
    display: flex;
    align-content: center;
    margin: 5px auto;
    content: '';
    width: ${isPrimary ? '8rem' : '5rem'};
    height: 2px;
    background: #cccccc;
    position: relative;
    margin-bottom: ${!isPrimary ? '20px' : '0px'};
  `}
`
