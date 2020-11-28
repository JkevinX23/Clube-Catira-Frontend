import styled, { css } from 'styled-components'

type WrapperProps = {
  icon?: 'associates' | 'transactions' | 'pending' | 'offers'
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, icon }) => css`
    display: flex;
    flex-direction: column;
    background: #fff;
    color: ${theme.colors.black};
    width: 30%;
    max-width: 30rem;
    height: 25%;
    max-height: 30rem;
    align-items: center;
    padding: 3rem 5rem;
    border-left: 1.5rem solid
      ${icon === 'associates'
        ? theme.colors.orange
        : icon === 'transactions'
        ? theme.colors.lightGreen
        : icon === 'pending'
        ? theme.colors.red
        : icon === 'offers'
        ? theme.colors.blue
        : theme.colors.white};
  `}
`

export const IconWrapper = styled.div``
export const Title = styled.p`
  font-size: 2.5rem;
`
export const Value = styled.p`
  font-size: 2.7rem;
`

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
`
