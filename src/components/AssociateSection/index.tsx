import Button from 'components/Button'
import * as S from './styles'
import Link from 'next/link'

const AssociateSection = () => (
  <S.Wrapper>
    <S.TextWrapper>Quero ser um associado</S.TextWrapper>
    <S.DecorationLineWrapper isPrimary />
    <S.DecorationLineWrapper />
    <Link href="/associar-se">
      <Button size="xxsmall">Associar-se</Button>
    </Link>
  </S.Wrapper>
)

export default AssociateSection
