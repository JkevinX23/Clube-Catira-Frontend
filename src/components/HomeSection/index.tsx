import * as S from './styles'

const HomeSection = () => (
  <S.Wrapper>
    <S.CentralizeWrapper>
      <S.TextWrapper size="large">
        Uma solução criativa e econômica
      </S.TextWrapper>

      <S.TextWrapper size="small">
        &quot;Gerando relacionamentos para você transformá-los em negócios&quot;
      </S.TextWrapper>

      <S.ImageWrapper
        aria-label="Trocas"
        src="/img/HomeImage2.svg"
        alt="Imagem abstrata indicando trocas multilaterais"
      />
    </S.CentralizeWrapper>
  </S.Wrapper>
)

export default HomeSection
