import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-image: url('img/video.png');
  height: 50rem;
  width: 100vw;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.lessThan('medium')`
    height: 100vh;
  `}
`
export const ImageWrapper = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
`
export const TextWrapper = styled.p`
  ${({ theme }) => css`
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    padding: 2rem;
    color: ${theme.colors.white};
    text-align: center;
  `}
`
export const SmoothWrapper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.39);
  height: 50rem;
  width: 100vw;

  ${media.lessThan('medium')`
    height: 100vh;
  `}
`
