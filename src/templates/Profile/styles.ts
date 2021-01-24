import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: #f9fafa;
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

export const WrapperCenter = styled.div`
  margin-left: 28%;
  height: 100vh;
`
export const WrapperContent = styled.div`
  padding: 1rem 0;
  width: 100%;
`
export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding: 5rem;
  row-gap: 3rem;
`

export const WrapperFooter = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;

  p:nth-child(1) {
    display: none;
  }
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
  background: #fff;
  width: 100%;
  padding: 20px 0;
`
