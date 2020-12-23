import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
  `}
`
export const WrapperTable = styled.div``
export const Title = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  margin: 2rem 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #c4c4c4;
`
export const Table = styled.table`
  margin-top: 2rem;
  border-collapse: collapse;
  width: 100%;
`
export const Tr = styled.tr`
  padding: 0.25rem;
  text-align: left;
  padding: 2px;
`
export const Th = styled.th`
  font-size: 1.5rem;
  padding: 2rem;
  text-align: left;
  border: 1px solid rgba(210, 210, 210, 0.8);
  color: rgba(180, 180, 180, 0.9);
  font-weight: 400;
  border-top: none;
`
export const Td = styled.td`
  padding: 2rem;
  text-align: left;
  border: 1px solid rgba(210, 210, 210, 0.8);
  color: #0063f0;
  cursor: pointer;
  &:nth-child(1) {
    color: rgba(200, 200, 200, 0.9);
    cursor: default;
  }
`
export const TFoot = styled.tfoot`
  th {
    text-align: center;
    color: #0063f0;
  }
`
