import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`
export const Header = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 5rem;
    padding-top: 5rem;
  }
`
export const Section = styled.div`
  h3 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    padding-top: 5rem;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }

  table {
    border-collapse: collapse;
    width: 80vw;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }
  th {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #eee;
  }
  tr:nth-child(1) {
    background-color: #43a4ff;
    color: white;
    @media print {
      color: #444;
    }
  }
`
export const TFooter = styled.div`
  padding-bottom: 4rem;
  padding-top: 2rem;
  p {
    padding-bottom: 1rem;
  }
`
export const Button = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  button {
    cursor: pointer;
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
export const BreakPage = styled.div`
  @media print {
    page-break-before: always;
  }
`
