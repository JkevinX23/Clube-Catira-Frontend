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
  padding-bottom: 2rem;
  z-index: 20;
  input {
    padding: 1rem;
    font-size: 1.6rem;
  }
  .react-datepicker {
    font-size: 1.2rem;
    z-index: 999;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 2.8rem;
    line-height: 2.8rem;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 1.4rem;
  }
`
export const Table = styled.div`
  display: block;
  width: 100%;
  z-index: 0;
`
export const Macro = styled.div`
  width: 100%;
`
