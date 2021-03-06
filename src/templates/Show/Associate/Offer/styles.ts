import styled, { css } from 'styled-components'

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
  margin-top: 32vh;
`
export const Breadcrumbs = styled.div`
  a,
  p {
    font-size: 1.5rem;
    color: #444;
  }
  padding-left: 3rem;
`
export const WrapperBreadcrumbs = styled.div`
  width: 100%;
  background: #f2f2f2;
  width: 100%;
  padding: 20px 0;
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
  @media (max-width: 768px) {
    ${WrapperContent} {
      padding: 2rem 0;
    }
    ${WrapperFooter} {
      margin-top: 4rem;
    }
  }
`
