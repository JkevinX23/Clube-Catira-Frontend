import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.47);
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
  max-width: 80rem;
  border-top: none;
  h4 {
    text-align: center;
  }

  button {
    margin-bottom: 2rem;
    margin-top: 1rem;
    align-self: flex-start;
    margin-left: 6%;
  }
`
export const Label = styled.p`
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  cursor: default;
  color: #333;
`
export const TextArea = styled.textarea`
  height: 14rem;
  width: 70rem;
  resize: vertical;
  outline: none;
  font-size: 2rem;
  border-radius: 6px;
  line-height: 1.33;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  padding: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  font-size: 2rem;
  line-height: 1.33;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  outline: none;
  padding-left: 1rem;
`

export const WrapperField = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 6%;
`
