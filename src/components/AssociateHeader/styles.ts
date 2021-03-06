import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-height: 55rem;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #fff;
  @media (max-width: 768px) {
    max-height: 40rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
  }
`
export const Name = styled.p`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  @media (max-width: 768px) {
    padding-right: 4rem;
    font-size: 1.5rem;
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  span {
    font-size: 1.2rem;
  }
  .__react_component_tooltip.show {
    opacity: 1;
  }
`

type ValueProps = {
  isNegative: boolean
}
export const Value = styled.p<ValueProps>`
  ${({ isNegative }) => css`
    color: ${isNegative ? '#FF4500' : 'black'};
  `}
`
export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #444;
  &:last-child {
    width: 4.4rem;
    height: 4.4rem;
    padding-top: 0.8rem;
  }
  @media (max-width: 768px) {
    padding-top: 0.2rem;
    &:last-child {
      padding-top: 0.2rem;
    }
  }
`

export const SpanTolltip = styled.p`
  font-size: 1.4rem;
  max-width: 20rem;
`
export const MenuPDV = styled.span`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    color: #555;
    font-size: 1.2rem;
    padding-top: 0.5rem;
  }
`
