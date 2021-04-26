import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const MenuWrapper = styled.div``
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
    padding-top: 5rem;
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    ${TextWrapper} {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  `}
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding: 5rem;
  row-gap: 3rem;
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  #searchInput {
    width: 100%;
    border: 1px solid #000;
    border-radius: 30px;
    font-size: 16px;
    background-color: white;
    background-image: url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-24.png');
    background-position: 10px 7px;
    background-repeat: no-repeat;
    padding: 8px 20px 8px 40px;
    -webkit-transition: width 0.8s ease-in-out;
    transition: width 0.8s ease-in-out;
    outline: none;
    opacity: 0.9;
  }
`
export const FiltersWrapper = styled.div`
  display: flex;
  background: rgba(250, 250, 250, 1);
  width: 100%;
  justify-content: center;
  align-items: center;
  ${SearchWrapper} {
    padding-top: 14px;
  }
  .selectCity {
    width: 40%;
    padding-bottom: 0rem;
  }
`
