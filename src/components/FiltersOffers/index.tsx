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
    setCity(cit)
  }, [cit, setCity])

  function handleClear() {
    const selectcity = document.getElementById('select-city')
    const selectAssociate = document.getElementById('select-associate')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    selectcity.options[0].selected = true

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    selectAssociate.options[0].selected = true
    setCit('')
    setAssociate(0)
    setAss('none')
  }

  function handleSetAss(value: any) {
    const v = associates.filter((a) => a.value === value)
    setAssociate(Number(v[0]?.key) || 0)
    setAss(value)
  }

  return (
    <S.Wrapper>
      <S.SelectWrapper
        id="select-city"
        onChange={(e) => setCit(e.target.value)}
        value={cit}
      >
        <option value="none" selected>
          Todas as cidades
        </option>
        {citys.length > 0 &&
          citys.map((c) => <option key={c.value}>{c.value}</option>)}
      </S.SelectWrapper>

      <S.SelectWrapper
        id="select-associate"
        onChange={(e) => handleSetAss(e.target.value)}
        value={ass}
      >
        <option value="none" selected>
          Todos os associados
        </option>
        {associates.length > 0 &&
          associates.map((a) => <option key={a.value}>{a.value}</option>)}
      </S.SelectWrapper>

      <S.Button>
        <Button background="black" size="xxsmall" onClick={() => handleClear()}>
          Limpar filtro
        </Button>
      </S.Button>
    </S.Wrapper>
  )
}

export default FiltersOffers
