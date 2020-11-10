import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrappeProps = Pick<ButtonProps, 'size' | 'background' | 'radius'>

const wrapperModifiersSize = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.xlarge};
  `
}

const wrapperModifiersBackground = {
  white: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
  `,
  blue: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
  `
}

const wrapperModifiersRadius = {
  radius100: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius100};
  `,
  radius200: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius200};
  `,
  radius300: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius300};
  `
}
export const Wrapper = styled.button<WrappeProps>`
  ${({ theme, size, background, radius }) => css`
    color: ${theme.colors.white};
    border: 0;

    ${!!size && wrapperModifiersSize[size](theme)}
    ${!!background &&
    wrapperModifiersBackground[background](theme)}
    ${!!radius &&
    wrapperModifiersRadius[radius](theme)}
  `}
`
