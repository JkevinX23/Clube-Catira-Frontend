import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  max-width: 70rem;
  text-align: left;
  padding: 1rem;
  gap: 5rem;
`

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
export const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 1rem;
`
export const Value = styled.p`
  color: #007da5;
  margin-bottom: 1rem;
`
export const WrapperDetails = styled.div`
  min-width: 25rem;
  width: 100%;
  white-space: nowrap;

  p {
    padding-bottom: 1rem;
  }
  span {
    padding-left: 2rem;
    color: #007da5;
  }
`
export const Description = styled.textarea`
  width: 100%;
  font-size: 1.8rem;
  height: 10ch;
  border: none;
  background: #f3f3f3;
  outline: none;
  resize: vertical;
  max-height: 15rem;
`
export const InputNumber = styled.input`
  font-size: 2rem;
  width: 7rem;
  padding: 0.4rem;
  border-radius: 1rem;
  outline: none;
  border: 1px solid #333;
  margin: 1rem;
  margin-right: 10rem;
`
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const DivWB = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`
