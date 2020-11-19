import Button from 'components/Button'
import * as S from './styles'

const AssociateSection = () => (
  <S.Wrapper>
    <S.TextWrapper>Selecione a Cidade</S.TextWrapper>
    <S.DecorationLineWrapper isPrimary />
    <S.DecorationLineWrapper />
    <S.SelectionSearchWrapper>
      <S.SelectWrapper>
        <option value="none" selected disabled hidden>
          Selecione
        </option>
        <option>Loren Ispun</option>
      </S.SelectWrapper>
      <Button fullWidth size="xxsmall">
        Buscar
      </Button>
    </S.SelectionSearchWrapper>
  </S.Wrapper>
)

export default AssociateSection
