import styled from 'styled-components'

export const WrapperField = styled.div`
  width: 80%;
  max-width: 50rem;
  padding: 2%;
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

export const InputRadio = styled.input`
  margin-right: 0.5rem;
`
export const RadioLabel = styled.label`
  padding-left: 1rem;
  color: #444;
  cursor: pointer;

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

export const Select = styled.select`
  display: flex;
  position: relative;
  color: #60666d;
  background: white;
  cursor: pointer;
  height: 62.5%;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 15px;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;
  margin-top: 0px;
  option {
    font-size: 15px;
    color: #60666d;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`
export const SelectWrapper = styled.div`
  width: 100%;
  margin-top: 0px;
`
export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
    text-align: center;

    padding-bottom: 1rem;
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

  @media (max-width: 768px) {
    line-height: 1.2;

    flex-direction: column;
    width: 100%;
    gap: 0rem;
    margin: 0 auto;
    img {
      height: 20rem;
    }
    ${WrapperField} {
      width: 100%;
    }
    ${Label} {
      margin-top: 2rem;
    }
    button {
      width: 100%;
    }
  }
`
