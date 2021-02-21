import styled, { css } from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Header = styled.header`
  padding-top: 2%;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`
export const Logo = styled.div``
export const Title = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`
export const Content = styled.div`
  background: #f5f5f5;
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
`
export const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 2rem;
  font-size: 14px;
`
export const Image = styled.div`
  img {
    max-width: 300px;
    max-height: 290px;
    background-color: #fff;
    padding: 4px;
  }
`
export const Session = styled.div`
  p {
    font-size: 14px;
  }
`
export const Associates = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 80%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`
export const Salesman = styled.div``
export const Buyer = styled.div``
export const Footer = styled.footer`
  background: #f5f5f5;
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  font-size: 14px;
  margin-bottom: 2rem;
`
export const Data = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
`
export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Button = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  button {
    padding: 1rem 4rem;
    font-size: 2rem;
    color: white;
    background: #4287f5;
    border: 1px solid #4287f5;
    border-radius: 4px;
    outline: none;
    &:hover {
      background: white;
      color: #4287f5;
      border: 1px solid #4287f5;
    }
  }
  @media print {
    button {
      display: none;
    }
  }
`
