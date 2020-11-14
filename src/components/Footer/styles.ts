import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
  `}
`

type TextProps = {
  Link?: boolean
}

export const TextWrapper = styled.p<TextProps>`
  ${({ theme, Link }) => css`
    color: ${Link ? theme.colors.blue : theme.colors.white};
    cursor: ${Link ? 'pointer' : 'default'};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    padding-top: 1rem;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
