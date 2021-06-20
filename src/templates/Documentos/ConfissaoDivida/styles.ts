import styled from 'styled-components'

export const Wrapper = styled.div`
  @media print {
    margin: none;
    box-shadow: none;
  }

  background: white;
  width: 21cm;
  height: 29.7cm;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 123, 255, 0.5);
  padding: 4rem;

  h1 {
    font-size: 18px;
    text-align: center;
  }
`
export const Subtitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  h6 {
    font-size: 15px;
    padding-bottom: 5px;
  }
`
export const BodyDocument = styled.div`
  p {
    font-size: 15px;
    margin-bottom: 2rem;
  }
`
export const PreFooter = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 15px;
  text-align: center;
  @media print {
    i {
      display: none;
    }
  }
`

export const Footer = styled.div`
  padding-top: 2rem;
  font-size: 15px;
`
export const TFooter = styled.div`
  display: flex;
  p {
    width: 10cm;
    padding-top: 10px;
  }
`
export const Button = styled.div`
  @media print {
    display: none;
  }
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  button {
    font-size: 22px;
    padding: 1rem 3rem;
    background: #007bff;
    border: 0;
    color: white;
    cursor: pointer;
    border: 1px solid #007bff;

    &:hover {
      background: white;
      color: #007bff;
      border: 1px solid #007bff;
    }
  }
`
