import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
  gap: 10px;
`
export const Title = styled.h1``
export const Topic = styled.h2`
  margin-top: 30px;
`
export const SubTitle = styled.h3``
export const Paragraph = styled.p`
  text-align: left;
  width: 100%;
`
export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  margin-bottom: 20px;
  th,
  td {
    border: 1px solid black;
    padding: 8px 15px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
    tr:hover {
      background-color: #ddd;
    }
  }
  th {
    background-color: #dfdfdf;
  }
`
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;
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
export const Wrapper = styled.div`
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media print {
    table {
      break-inside: break-inside;
    }
    ${Title} {
      font-size: 24px;
    }
    ${Topic},
    ${SubTitle} {
      font-size: 20px;
    }
    ${Table} {
      margin-bottom: 10px;
      th,
      td {
        padding: 6px 10px;
      }
    }
  }
`
