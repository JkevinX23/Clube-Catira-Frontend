import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  z-index: 10;
  font-size: 1.2rem;

  input,
  p,
  span,
  td,
  th {
    font-size: 1.3rem;
  }

  h6 {
    font-size: 2rem;
  }

  .MuiTablePagination-root {
    width: 100%;
    overflow: hidden;
  }
  .MuiTable-root {
    width: 100%;
    table {
      max-width: none;
    }
  }
`

export const Button = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const DatePicker = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 77vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const Table = styled.div`
  display: block;
  width: 100%;
`
export const Macro = styled.div`
  width: 100%;
`
