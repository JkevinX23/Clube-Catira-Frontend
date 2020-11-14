import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-image: url('img/HomeSection1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100vw;
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
  max-height: 90vh;
  width: 90vw;
`
export const TextWrapper = styled.p<TextProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-size: ${size === 'large'
      ? theme.font.sizes.xxlarge
      : theme.font.sizes.xlarge};
    text-align: center;
    position: relative;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    font-weight: ${size === 'large' ? theme.font.bold : theme.font.normal};

    ${media.lessThan('medium')`
      font-size: ${
        size === 'large' ? theme.font.sizes.large : theme.font.sizes.medium
      };
      padding-top: ${theme.spacings.xsmall};
      padding-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const ImageWrapper = styled.img`
  ${({ theme }) => css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    ${media.lessThan('medium')`
    padding-top: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.xsmall};
    height: 10rem;
    width: 10rem;

    `}
  `}
`
