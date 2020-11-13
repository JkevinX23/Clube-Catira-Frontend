import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('img/HomeSection1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100vh;
`

type TextProps = {
  size?: string
}

export const CentralizeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const TextWrapper = styled.p<TextProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-size: ${size === 'large'
      ? theme.font.sizes.xxlarge
      : theme.font.sizes.large};
    text-align: center;
    position: relative;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`

export const ImageWrapper = styled.img`
  ${({ theme }) => css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`
