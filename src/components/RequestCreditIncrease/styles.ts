import styled from 'styled-components'

export const Wrapper = styled.div`
  line-height: 1.75;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.47);
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 60rem;
  min-height: 40.5rem;

  h4 {
    text-align: center;
  }

  button {
    margin-bottom: 2rem;
    margin-top: 1rem;
    align-self: flex-start;
    margin-left: 10%;
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
`

export const WrapperField = styled.div`
  width: 80%;
  max-width: 50rem;
  padding-top: 2%;
`
