import Button from 'components/Button'
import * as S from './styles'

const AssociateSection = () => (
  <S.Wrapper>
    <S.TextWrapper>Quero ser um associado</S.TextWrapper>
    <S.DecorationLineWrapper isPrimary />
    <S.DecorationLineWrapper />
    <Button size="xxsmall">ASSOCIAR-SE</Button>
  </S.Wrapper>
)

export default AssociateSection
