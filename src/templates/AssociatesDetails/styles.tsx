import styled, { css } from 'styled-components'

export const MenuWrapper = styled.div``
type DecorationProps = {
  isPrimary?: boolean
}

export const DecorationLineWrapper = styled.div<DecorationProps>`
  ${({ isPrimary }) => css`
    display: flex;
    align-content: center;
    margin: 5px auto;
    content: '';
    width: ${isPrimary ? '8rem' : '5rem'};
    height: 2px;
    background: #cccccc;
    position: relative;
    margin-bottom: ${!isPrimary ? '4rem' : '0px'};
    margin-top: ${!isPrimary ? '5px' : '3rem'};
  `}
`
export const TextWrapper = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    color: ${theme.colors.black};
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding: 5rem;
  row-gap: 3rem;
`
export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      ${theme.colors.gray} 0%,
      rgba(250, 250, 250, 1) 100%
    );
  `}
`
export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
    z-index: ${theme.layers.base};
  `}
`
export const WrapperMenu = styled.div`
  margin-top: 7.5rem;
  z-index: 20;
`
export const WrapperContent = styled.div`
  padding: 1rem 0;
  width: 80%;
  margin-left: 10%;
  z-index: 5;
`
export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding: 5rem;
  row-gap: 3rem;
`
export const WrapperFooter = styled.div`
  position: relative;
  padding-top: 2rem;
  width: 100%;

  p:nth-child(1) {
    display: none;
  }
`
