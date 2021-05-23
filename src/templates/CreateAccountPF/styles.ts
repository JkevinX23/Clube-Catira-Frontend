import styled, { css } from 'styled-components'

type DecorationProps = {
  isPrimary?: boolean
}
export const DecorationLineWrapper = styled.div<DecorationProps>`
  ${({ theme, isPrimary }) => css`
    display: flex;
    align-content: center;
    margin: 5px auto;
    content: '';
    width: ${isPrimary ? '8rem' : '5rem'};
    height: 2px;
    background: ${theme.colors.black};
    position: relative;
    margin-bottom: ${!isPrimary ? '20px' : '0px'};
  `}
`
export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const ImageWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 3em;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 25.2rem;
  height: 16.7rem;
  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    height: 16.5rem;
    object-fit: cover;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;
`
export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`
export const TextFieldWrapper = styled.div`
  display: flex;
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
  gap: 2rem;
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

type AreaProps = {
  isDescription?: boolean
}
export const TextArea = styled.textarea<AreaProps>`
  ${({ isDescription }) => css`
    height: ${isDescription ? '15.5rem' : '12rem'};
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
  `}
`
export const Image = styled.img`
  margin-top: 1rem;
  margin-right: 3em;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  width: 25.6rem;
  height: 14.4rem;
  object-fit: cover;
`
export const Button = styled.div``
export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      ${theme.colors.gray} 0%,
      rgba(250, 250, 250, 1) 100%
    );
  `}
  @media (max-width: 768px) {
    ${InlineWrapper} {
      flex-direction: column;
      align-items: center;
    }
    ${TitleWrapper} {
      padding: 2rem;
      gap: 1rem;
    }
    ${TextFieldWrapper} {
      display: flex;
      width: 100%;
      align-items: center;
    }
    ${FormWrapper} {
      justify-content: center;
    }
    ${Select} {
      height: 3rem;
    }
    ${TextWrapper} {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      img {
        margin: 0;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }
      ${Label} {
        width: 100%;
        text-align: left;
      }
    }
    ${SelectWrapper} {
      width: 100%;
    }
    ${TextArea} {
      width: 100%;
    }
    button {
      width: 90%;
    }
  }
`
