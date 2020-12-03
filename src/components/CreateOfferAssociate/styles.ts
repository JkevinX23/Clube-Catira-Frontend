import styled from 'styled-components'

export const WrapperField = styled.div`
  width: 80%;
  max-width: 50rem;
  padding: 2%;
`

export const Wrapper = styled.div`
  line-height: 1.75;
  display: flex;
  margin: 0 0 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.47);
  border: 1px solid #ccc;
  border-radius: 4px;
  gap: 4rem;

  h4 {
    text-align: left;
  }

  button {
    margin-top: 2rem;
    padding: 0.5rem 4rem;
  }

  ${WrapperField}:nth-child(2) {
    p:nth-child(1) {
      margin-top: 8%;
    }
  }
`
export const Label = styled.p`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  cursor: default;
  font-stretch: inherit;
  align-self: flex-start;
  color: #333;
  &::after {
    content: ' *';
    color: #ff5757;
    font-size: 10px;
    position: relative;
    top: -5px;
  }
`
export const TextArea = styled.textarea`
  height: 12rem;
  width: 100%;
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

export const InputRadio = styled.input``
export const RadioLabel = styled.label`
  padding-left: 0.7rem;
  color: #444;
  font-size: 1.8rem;
  &:nth-child(2) {
    padding-right: 2rem;
  }
`
export const WrapperRadio = styled.div``
export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  button {
    margin-left: auto;
  }
`
