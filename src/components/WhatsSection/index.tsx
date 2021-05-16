import * as S from './styles'

const WhatsSection = () => (
  <S.Wrapper>
    <S.ImageWrapper
      aria-label="Homem vestido um terno"
      src="/img/about-01.png"
      alt="Foto ilustrativa de um homem de terno."
    />

    <S.TextContainerWrapper>
      <S.TextWrapper isTitle={true}>O QUE É O CLUBE DA CATIRA?</S.TextWrapper>
      <S.DecorationLineWrapper isPrimary />
      <S.DecorationLineWrapper />
      <S.TextWrapper>
        A Catira surgiu para geração de negócios sem a necessidade de gerar
        grandes pagamentos em dinheiro. É excelente maneira de gerar negócios,
        baseado em trocas individuais denominada{' '}
        <S.TextBold> MULTILATERAIS. </S.TextBold> Criando relacionamentos para
        gerar negócios.
      </S.TextWrapper>
      <S.TextWrapper>
        Onde não existe a necessidade de um interesse direto entre comprador e
        vendedor.
      </S.TextWrapper>
    </S.TextContainerWrapper>
  </S.Wrapper>
)

export default WhatsSection
