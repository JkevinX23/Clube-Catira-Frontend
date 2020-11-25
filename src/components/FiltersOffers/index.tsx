import Button from 'components/Button'
import * as S from './styles'

const FiltersOffers = () => (
  <S.Wrapper>
    <S.SelectWrapper>
      <option value="none" selected disabled hidden>
        Todas as cidades
      </option>
      <option>Loren Ispun</option>
    </S.SelectWrapper>

    <S.SelectWrapper>
      <option value="none" selected disabled hidden>
        Todos os associados
      </option>
      <option>Loren Ispun</option>
    </S.SelectWrapper>

    <Button background="black" size="xxsmall">
      Limpar filtro
    </Button>
  </S.Wrapper>
)

export default FiltersOffers
