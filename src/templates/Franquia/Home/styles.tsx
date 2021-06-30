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
    top: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
    z-index: ${theme.layers.base};
  `}
`
export const WrapperMenu = styled.div`
  margin-top: 7.5rem;
`
export const WrapperContent = styled.div`
  padding-left: 7%;
`
export const WrapperCards = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-right: 1rem;
  justify-content: space-between;
`

export const WrapperFooter = styled.div`
  margin-top: 8rem;
`
export const WrapperReports = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5rem;
`
export const DashNewAssociate = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Row = styled.div`
  display: flex;
  gap: 4rem;
`
