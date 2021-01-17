import Button from 'components/Button'
import { useEffect, useState } from 'react'
import { FilterProps } from 'Types'
import * as S from './styles'

const FiltersOffers = ({
  associates,
  citys,
  setCity,
  setAssociate
}: FilterProps) => {
  const [ass, setAss] = useState('')
  const [cit, setCit] = useState('')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    setCity(cit)
  }, [cit, setCity])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    setAssociate(ass)
  }, [ass, setAssociate])

  function handleClear() {
    const selectcity = document.getElementById('select-city')
    const selectAssociate = document.getElementById('select-associate')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    selectcity.options[0].selected = true

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    selectAssociate.options[0].selected = true
  }

  return (
    <S.Wrapper>
      <S.SelectWrapper
        id="select-city"
        onChange={(e) => setCit(e.target.value)}
      >
        <option value="none" selected disabled hidden>
          Todas as cidades
        </option>
        {citys.length > 0 &&
          citys.map((c) => (
            <option value={cit} key={c.value}>
              {c.value}
            </option>
          ))}
      </S.SelectWrapper>

      <S.SelectWrapper
        id="select-associate"
        onChange={(e) => setAss(e.target.value)}
      >
        <option value="none" selected disabled hidden>
          Todos os associados
        </option>
        {associates.length > 0 &&
          associates.map((a) => (
            <option value={ass} key={a.key}>
              {a.value}
            </option>
          ))}
      </S.SelectWrapper>

      <Button background="black" size="xxsmall" onClick={handleClear}>
        Limpar filtro
      </Button>
    </S.Wrapper>
  )
}

export default FiltersOffers
