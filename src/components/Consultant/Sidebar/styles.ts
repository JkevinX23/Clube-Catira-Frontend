import styled from 'styled-components'

export const Container = styled.header`
  font-size: 1.5rem;
  color: black;
  background-color: white;
  margin: 0;
  padding: 0;
  .navbar {
    position: fixed;
    background-color: #222;
    transition: width 600ms ease;
    overflow: scroll;
    z-index: 20;
    overflow-x: hidden;
  }

  li {
    cursor: pointer;
  }
  span {
    color: white;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .nav-item {
    width: 100%;
  }
  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: #b6b6b6;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 0.6s;
  }
  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: #141418;
    color: #ececec;
  }
  .link-text {
    display: none;
    margin-left: 1rem;
  }
  .nav-link svg {
    width: 3rem;
    min-width: 3rem;
    margin: 0 1.5rem;
  }
  .fa-primary {
    color: #1bcae1;
  }
  .fa-secondary {
    color: #1b93e1;
  }
  .fa-primary,
  .fa-secondary {
    transition: 0.6s;
  }
  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #ececec;
    background: #141418;
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
    font-size: 2.5rem;
  }
  .logo svg {
    transform: rotate(0deg);
    transition: 0.6s;
  }
  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: 0.6s;
  }
  .navbar:hover .logo svg {
    transform: rotate(-180deg);
  }
  /* Small screens */
  @media only screen and (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 8rem;
      overflow-y: hidden;
    }
    .logo {
      display: none;
    }
    .navbar-nav {
      flex-direction: row;
    }
    .nav-link {
      justify-content: center;
    }
    main {
      margin: 0;
    }
  }
  /* Large screens */
  @media only screen and (min-width: 600px) {
    .navbar {
      top: 0;
      width: 8rem;
      height: 100%;
    }
    .navbar:hover {
      width: 18rem;
    }
    .navbar:hover .link-text {
      display: inline;
    }
    .navbar:hover .logo svg {
      margin-left: 13rem;
    }
    .navbar:hover .logo-text {
      left: 0px;
    }
  }
  .theme-icon {
    display: none;
  }
  .dark #darkIcon {
    display: block;
  }
  .light #lightIcon {
    display: block;
  }
  .solar #solarIcon {
    display: block;
  }
`
