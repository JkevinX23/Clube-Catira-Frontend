import * as S from './styles'

export type SearchTableFieldProps = {
  filterText: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilter: (e: any) => void
  onClear: () => void
}

const SearchTableField = ({
  filterText,
  onFilter,
  onClear
}: SearchTableFieldProps) => (
  <S.Wrapper>
    <S.SerchBox
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <S.ClearButton type="button" onClick={onClear}>
      X
    </S.ClearButton>
  </S.Wrapper>
)

export default SearchTableField
