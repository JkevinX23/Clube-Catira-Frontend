import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  position: relative;
`
export const HomeSectionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
export const MenuWrapper = styled.div``
export const SobrepositionWrapper = styled.div`
  position: relative;
`

export const WhatsSectionWrapper = styled.div`
  header {
    background: #fff;
  }
  footer {
    ul {
      display: none;
    }
  }

  .login {
    width: 100%;
    background: #f5f5f5;
    height: 100%;
    min-height: 100vh;
    padding-top: 10vh;

    strong {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: normal;
      text-align: center;
      font-size: 30px;
      color: #444;
      padding-top: 10px;
      font-weight: bold;
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .input {
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #222;
    background: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #eee;
  }

  .buttom.lb {
    width: 50%;
    padding: 15px 8px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    background: #f7941e;
    color: white;
    border: none;
    transition: all 0.5s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
      background: #007bff;
    }
  }

  @media only screen and (max-width: 470px) {
    .input {
      width: 80%;
      min-width: 250px;
    }
    .buttom.lb {
      width: 80%;
      min-width: 250px;
    }
  }
`

export const HowWorksWrapper = styled.div`
  ${media.lessThan('medium')`
    margin-top: 30rem;
  `}
`

export const BackToTopWrapper = styled.div`
  position: absolute;
  z-index: 10;
`
