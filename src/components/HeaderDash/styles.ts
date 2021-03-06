import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    width: 100%;
    justify-content: space-between;
  `}
`
export const Logo = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  img {
    width: 25rem;
    height: auto;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background: #00aaff;
  margin: 2%;
  padding: 1rem;
  border-radius: 9px 0px 9px 0px;
  color: white;
`
export const Name = styled.p`
  font-size: 2.5rem;
`
export const Role = styled.p`
  font-size: 1.8rem;
  font-style: italic;
`
export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`
export const Options = styled.ul`
  position: absolute;
  z-index: 10;
  background: #00aaff;
  padding: 1.2rem;
  color: white;
  list-style: none;
  border-radius: 0px 0px 0px 9px;
  animation: fadeIn 0.5s;
  right: 3.65rem;
  top: 10.5rem;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  li {
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    overflow: visible;
  }

  ${Icon} {
    width: 2.5rem;
    height: 2.5rem;
  }
`
