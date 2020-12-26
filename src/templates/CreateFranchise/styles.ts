import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      ${theme.colors.gray} 0%,
      rgba(250, 250, 250, 1) 100%
    );
  `}
`

export const TextFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;

  .kOdHjb {
    background-color: #ffff;
    cursor: text;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
export const Footer = styled.footer`
  margin-top: 6vw;
`
export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    text-align: right;
    cursor: pointer;
  `}
`
export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  select {
    width: 98%;
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
  border: none;
`
export const Label = styled.p``
export const SelectWrapper = styled.div`
  width: 50%;
`

type TextWrapperProps = {
  items: number
}
export const TextWrapper = styled.div<TextWrapperProps>`
  ${({ items }) => css`
    display: block;
    width: ${items === 2 ? '60%' : items === 3 ? '33%' : '100%'};
    line-height: 1.25;
    color: #495057;
    padding-right: 1rem;
  `}
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
