import styled, { css } from 'styled-components'

type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 18rem;
    background-color: #fff;
    background-image: url(${src});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;
  `}
`

export const Title = styled.p`
  width: 100%;
  text-transform: uppercase;
  font-size: 1.85rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`
type subTitleProps = {
  isLink?: boolean
}
export const subTitle = styled.p<subTitleProps>`
  ${({ theme, isLink }) => css`
    color: ${theme.colors.lightBlack};
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    cursor: ${isLink ? 'pointer' : 'default'};
    margin-left: 0.5rem;
  `}
`

export const BuyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`
export const Value = styled.p``

export const Wrapper = styled.main`
  width: 26rem;
  text-align: center;
  border: 1px solid black;
  @media (max-width: 768px) {
    width: 26rem;
    ${Image} {
      height: 14rem;
    }
    ${Title} {
      font-size: 1.8rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    ${subTitle} {
      font-size: 1.5rem;
      margin-top: 0.8rem;
      margin-bottom: 1rem;
    }
    ${BuyWrapper} {
      padding: 0 0.5rem;
      margin-bottom: 1.5rem;
    }
  }
`
export const Button = styled.div``
