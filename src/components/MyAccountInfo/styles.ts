import styled, { css } from 'styled-components'

export const WrapperImage = styled.div`
  width: 32rem;

  button {
    width: 93%;
    margin: 1rem auto;
  }

  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .inputfile + label {
    color: #eee;
    background-color: #074355;
    border-radius: 4px;
    padding: 8px 4px;
    &:hover {
      color: #074355;
      background-color: #eee;
      border: 1px solid #074355;
    }
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
export const Adesao = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.medium};
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
      &::after {
        content: '';
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.blue};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 80%;
          left: 0;
        }
      }
    }
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
    margin-bottom: 1rem;
  `}
`
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  padding-top: 1rem;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  background-color: #eee;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
  max-width: 70rem;
  height: 50rem;
  padding-bottom: 6rem;
  border-top: none;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    height: 100%;
    padding-bottom: 1rem;
    margin-bottom: 6rem;
    ${WrapperImage} {
      width: auto;
      height: 20rem;
    }
    ${WrapperInfo} {
      margin-top: 4rem;
      padding-top: 0rem;
      padding-left: 1rem;
    }
  }
`
