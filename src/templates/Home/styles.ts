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
export const WrapperHeader = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.47);
    z-index: ${theme.layers.base};
  `}
`
export const WrapperMenu = styled.div`
  margin-top: 7.5rem;
`
export const WrapperContent = styled.div`
  padding: 4rem 0;
  background-color: #f9fafa;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`
export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  padding: 5rem;
  row-gap: 3rem;
`

export const WrapperFooter = styled.div`
  margin-top: 8rem;
`
export const Text = styled.h2`
  color: #444;
  width: 100%;
  font-size: 3rem;
  text-align: center;
`
export const Breadcrumbs = styled.div`
  a,
  p {
    font-size: 1.5rem;
    color: #444;
  }
  padding-left: 3rem;
`
export const WrapperBreadcrumbs = styled.div`
  width: 100%;
  background: #f2f2f2;
  width: 100%;
  padding: 20px 0;
`
export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  #searchInput {
    width: 18%;
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
    min-width: 200px;
  }
`

export const Button = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

// export const Button = styled.div`
//   display: block;
//   position: absolute;
//   width: 100%;
//   button {
//     position: fixed;
//     right: 0.5vw;
//     top: 90vh;
//   }
// `
