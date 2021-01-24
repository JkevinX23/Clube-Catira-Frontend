import styled from 'styled-components'

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
`
export const Name = styled.p`
  font-size: 2rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  span {
    font-size: 1.2rem;
  }
`
export const Value = styled.p``
export const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  color: #444;
  &:last-child {
    width: 4.4rem;
    height: 4.4rem;
    padding-top: 0.8rem;
  }
`
