import * as S from './styles'

type pageProps = {
  citys: string[]
  setFilter: (c: string) => void
}

const AssociateSection = ({ citys, setFilter }: pageProps) => (
  <S.Wrapper>
    {/* <S.TextWrapper>Filtrar por Cidade</S.TextWrapper>
    <S.DecorationLineWrapper isPrimary />
    <S.DecorationLineWrapper /> */}
    <S.SelectionSearchWrapper>
      {citys && (
        <S.SelectWrapper
          onClick={(e) => setFilter((e.target as HTMLTextAreaElement).value)}
        >
          <option value="" selected>
            Todas as cidades
          </option>
          {citys &&
            citys.map((c: string, i: number) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
        </S.SelectWrapper>
      )}
    </S.SelectionSearchWrapper>
  </S.Wrapper>
)

export default AssociateSection
