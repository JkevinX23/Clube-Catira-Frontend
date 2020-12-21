import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: #fff;
    border-radius: 1rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.gray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.green};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: ponter;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
    ${Label} {
      color: ${theme.colors.danger};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: #bbb;
      }
    }
  `
}

export const Wrapper = styled.div<
  Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
  ${({ theme, error, disabled }) => css`
    ${!!error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
