import styled, { css } from 'styled-components'

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

export const WrapperFooter = styled.div`
  position: relative;
  width: 100%;

  p:nth-child(1) {
    display: none;
  }
`
export const WrapperContent = styled.div`
  padding: 5rem 0;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  gap: 4rem;
  height: 100vh;
`
export const MyCredits = styled.div`
  min-width: 30rem;
  height: 100%;
`
export const RequestIncrease = styled.div``
