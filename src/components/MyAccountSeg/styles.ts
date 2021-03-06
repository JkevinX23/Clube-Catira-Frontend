import styled from 'styled-components'

export const Label = styled.p`
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  cursor: default;
  color: #333;
  &::after {
    content: ' *';
    color: #ff5757;
    font-size: 10px;
    position: relative;
    top: -5px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  font-size: 2rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  outline: none;
  padding-left: 1rem;
`

export const WrapperField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 6%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
  max-width: 80rem;
  height: 35rem;
  border-top: none;
  min-width: 60rem;

  button {
    margin-bottom: 2rem;
    margin-top: 2rem;
    align-self: flex-end;
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    min-width: 25rem;
    height: 35rem;
    ${WrapperField} {
      width: 100%;
    }
    button {
      margin-bottom: 2rem;
      margin-top: 2rem;
      align-self: center;
      margin-right: 0%;
    }
  }
`
