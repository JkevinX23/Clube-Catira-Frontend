import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 57rem;
    width: 100%;
    display: flex;
    padding-top: 5rem;

    ${media.lessThan('medium')`
      flex-direction: column;
      padding-left: 1rem;
    `}
  `}
`
export const ImageWrapper = styled.img`
  width: 50rem;
  height: 46.8rem;
  ${media.between('medium', 'large')`
    width: 40rem;
    height: 42rem;
`}

  ${media.lessThan('medium')`
    display: flex;
    width: 90vw;
    height: 50vh;
    max-height: 38rem;
    align-items: center;
  `}
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

    ${media.between('medium', 'large')`
    margin-top: 2rem;
    width: 40rem;
    height: 38rem;
    margin-bottom: 2rem;
    padding: 1rem;
  `}

    ${media.lessThan('medium')`
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      align-items: center;
    `}
  `}
`
export const TextWrapper = styled.p<TextProps>`
  ${({ theme, isTitle }) => css`
    font-size: ${!isTitle ? theme.font.sizes.small : theme.font.sizes.xlarge};
    font-weight: ${isTitle ? theme.font.bold : theme.font.normal};
    color: ${theme.colors.white};
    padding-bottom: 2rem;
    text-align: center;

    ${media.between('medium', 'large')`
    font-size: ${!isTitle ? theme.font.sizes.small : theme.font.sizes.large};
  `}
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
