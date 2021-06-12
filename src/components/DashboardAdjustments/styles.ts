import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40rem;
    padding: 2rem;
    max-width: 36rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
  `}
`
export const WrapperInfo = styled.div`
  display: flex;
  width: 80%;
  max-width: 30rem;
  justify-content: space-between;
  margin-top: 1rem;
`
export const Title = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  margin: 2rem 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #c4c4c4;
`
export const Sub = styled.p``

type LeadProps = {
  direct?: boolean
}
export const Lead = styled.p<LeadProps>`
  ${({ theme, direct }) => css`
    background: ${direct ? theme.colors.orange : theme.colors.danger};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: 0.2rem;
    border-radius: 8px 0px 8px 0px;
  `}
`
export const SelectWrapper = styled.div`
  width: 100%;
  margin-top: 0px;
  .react-select-container {
    font-size: 1.4rem;
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
`
export const Button = styled.div`
  width: 100%;
  padding-top: 2rem;
  button {
    float: right;
  }
`
export const InputDiv = styled.div`
  width: 100%;
  input {
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
  }
`
export const TextArea = styled.textarea`
  height: 5rem;
  width: 100%;
  resize: vertical;
  outline: none;
  font-size: 1.4rem;
  border-radius: 6px;
  line-height: 1.33;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  padding: 1rem;
`
