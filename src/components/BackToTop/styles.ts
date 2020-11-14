import styled from 'styled-components'

export const Wrapper = styled.main`
  color: white;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`
