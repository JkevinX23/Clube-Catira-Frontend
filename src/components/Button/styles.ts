import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrappeProps = Pick<
  ButtonProps,
  'size' | 'background' | 'radius' | 'fullWidth'
>

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
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    &:hover {
      background: ${theme.colors.black};
      color: ${theme.colors.white};
    }
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    &:hover {
      background: ${theme.colors.darkgreen};
    }
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
    &:hover {
      background: ${theme.colors.blue};
    }
  `,
  blue: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
    &:hover {
      background: ${theme.colors.orange};
    }
  `,
  black: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme.colors.danger};
    border: 1px solid ${theme.colors.danger};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.danger};
      border: 1px solid ${theme.colors.danger};
    }
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

const wrapperModifiersFullWidth = {
  fullWidth: () =>
    css`
      width: 100%;
    `
}

const wrapperDisabled = {
  disabled: () =>
    css`
      background: #ccc;
      &:hover {
        background: #aaa;
      }
    `
}
export const Wrapper = styled.button<WrappeProps>`
  ${({ theme, size, background, radius, fullWidth, disabled }) => css`
    color: ${theme.colors.white};
    border: 0;
    transition-duration: 0.5s;
    cursor: pointer;
    outline: none;

    ${!!size && wrapperModifiersSize[size](theme)}
    ${!!background &&
    wrapperModifiersBackground[background](theme)}
    ${!!radius &&
    wrapperModifiersRadius[radius](theme)}
    ${!!fullWidth &&
    wrapperModifiersFullWidth.fullWidth()}
    ${!!disabled &&
    wrapperDisabled.disabled()}
  `}
`
