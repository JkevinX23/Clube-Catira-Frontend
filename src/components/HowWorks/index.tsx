import * as S from './styles'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

const HowWorks = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Jg2GetMWJJI"
        onClose={() => setOpen(false)}
      />
      <S.SmoothWrapper onClick={() => setOpen(true)}>
        <S.ImageWrapper
          aria-label="Clube da Catira"
          src="/img/ic-play.webp"
          alt="Símbolo azul representando uma troca mas o nome Clube da catira"
        />
        <S.TextWrapper>Assista nosso vídeo explicativo</S.TextWrapper>
      </S.SmoothWrapper>
    </S.Wrapper>
  )
}

export default HowWorks
