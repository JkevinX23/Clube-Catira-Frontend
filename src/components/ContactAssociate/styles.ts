import styled, { css } from 'styled-components'

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 30rem;
    max-width: 30rem;
    min-width: 25rem;
    background-color: ${theme.colors.white};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    border: 1px solid black;
  `}
`
export const Content = styled.div`
  display: flex;
`
export const WrapperDetails = styled.div`
  margin-left: 2rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Title = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  color: #a2a2a2;
`
export const Sub = styled.p`
  font-size: 1.6rem;
`
export const WrapperContact = styled.div`
  max-width: 70rem;
  margin-top: 4rem;
`

export const Label = styled.p`
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  cursor: default;
  color: #333;
`
export const TextArea = styled.textarea`
  height: 14rem;
  width: 70rem;
  resize: vertical;
  outline: none;
  font-size: 2rem;
  border-radius: 6px;
  line-height: 1.33;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  padding: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  font-size: 2rem;
  line-height: 1.33;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  outline: none;
  padding-left: 1rem;
`

export const WrapperField = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const Wrapper = styled.main`
  padding: 2rem;
  @media (max-width: 768px) {
    ${Content} {
      flex-direction: column;
    }
    ${Image} {
      height: 20rem;
      max-width: 100%;
      min-width: none;
    }
    ${Title} {
      font-size: 3rem;
      font-weight: bold;
    }
    ${WrapperDetails} {
      margin-top: 1rem;
      margin-left: 0rem;
      gap: 1rem;
    }
  }
`
export const WrapperImage = styled.div``
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: ${theme.colors.blue};
    }
  `}
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  justify-content: center;
  gap: 20%;
`
export const WrapperOffers = styled.div``
export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding-top: 2em;
`
export const Text = styled.h2`
  color: #444;
  width: 100%;
  font-size: 3rem;
  text-align: center;
`
