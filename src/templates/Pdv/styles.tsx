import styled, { css } from 'styled-components'
export const Wrapper = styled.div`
  height: 100vh;
  background: #3b8fc5;
  background: linear-gradient(180deg, #0073bf 0%, #3b8fc5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 10%;
  padding-left: 10%;
  width: 100%;
  gap: 2rem;
  max-width: 1000px;

  input {
    width: 100%;
  }
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

export const InputWrapper = styled.div`
  width: 100%;
  input {
    text-align: center;
    padding: 15px;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
`
