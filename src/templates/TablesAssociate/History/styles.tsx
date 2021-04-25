import styled from 'styled-components'

export const Wrapper = styled.div`
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
