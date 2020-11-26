import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  background-color: #eee;
  max-width: 70rem;
  height: 50rem;
  padding-bottom: 6rem;
`
export const WrapperImage = styled.div`
  width: 32rem;

  button {
    width: 93%;
    margin: 1rem auto;
  }
`
export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
  `}
`
export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.font.light};
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.medium};
    margin-top: 2rem;
  `}
`
export const WrapperText = styled.div`
  ${({ theme }) => css`
    p {
      font-weight: ${theme.font.light};
      margin-top: 0.6rem;
    }
  `}
`

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 100%;
    max-width: 30rem;
    max-height: 40rem;
    background-color: ${theme.colors.white};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
    padding: 4px;
    border: 4px solid ${theme.colors.white};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  `}
`
