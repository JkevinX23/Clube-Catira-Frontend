import styled, { css } from 'styled-components'

export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
    z-index: ${theme.layers.menu};
  `}
`
export const WrapperMenu = styled.div`
  margin-top: 7.5rem;
  z-index: 20;
`

export const WrapperFooter = styled.div`
  position: relative;
  width: 100%;
`
export const WrapperContent = styled.div`
  padding: 5rem 0;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  gap: 4rem;
`
export const MyCredits = styled.div`
  min-width: 30rem;
  height: 100%;
`
export const RequestIncrease = styled.div``
export const Table = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10%;
  padding-bottom: 4rem;
  align-items: center;
  justify-content: center;
  table {
    max-width: 90rem;
    min-width: 65rem;
  }
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
  overflow: hidden;

  @media (max-width: 768px) {
    ${WrapperContent} {
      padding: 2rem 0;
      flex-direction: column;
    }
    ${MyCredits} {
      min-width: 15rem;
    }
    ${RequestIncrease} {
      width: 90%;
      margin-left: 5%;
    }
    ${Table} {
      display: flex;
      width: 96%;
      padding: 0;
      padding-left: 2%;
      padding-bottom: 4rem;
      table {
        width: 100%;
        max-width: 90rem;
        min-width: 10rem;
      }
    }
  }
`
