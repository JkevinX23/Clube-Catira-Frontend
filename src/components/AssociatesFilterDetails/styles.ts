import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5rem;
  `}
`
type DecorationProps = {
  isPrimary?: boolean
}

export const DecorationLineWrapper = styled.div<DecorationProps>`
  ${({ isPrimary }) => css`
    display: flex;
    align-content: center;
    margin: 5px auto;
    content: '';
    width: ${isPrimary ? '8rem' : '5rem'};
    height: 2px;
    background: #cccccc;
    position: relative;
    margin-bottom: ${!isPrimary ? '4rem' : '0px'};
    margin-top: ${!isPrimary ? '5px' : '3rem'};
  `}
`
export const TextWrapper = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    color: ${theme.colors.black};
  `}
`
export const SelectionSearchWrapper = styled.div`
  width: 80%;
  max-width: 600px;
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;

  select {
    width: 98%;
  }
  Button {
    &:hover {
      background-color: #0073ff;
      transition: 0.5s;
      outline: none;
    }
  }
`
export const SelectWrapper = styled.select`
  padding: 0.5rem;
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  color: #60666d;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
`
