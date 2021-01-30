import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 25rem;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 18rem;
    background-color: ${theme.colors.white};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`

export const Title = styled.p`
  width: 100%;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const subTitle = styled.p`
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`
