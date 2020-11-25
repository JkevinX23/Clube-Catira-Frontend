import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const SerchBox = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  &:hover {
    cursor: pointer;
  }
`

export const ClearButton = styled.button`
  border-radius: 0px 5px 5px 0px;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(41, 121, 255);
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`
