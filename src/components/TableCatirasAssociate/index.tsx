import { useState, useMemo, useEffect } from 'react'
import * as S from './styles'
import DataTable from 'react-data-table-component'
import SearchTableField from 'components/SearchTableField'
import { CatirasProps } from 'utils/types'

const columns = [
  {
    name: 'Nº Pedido',
    selector: 'id',
    sortable: true
  },
  {
    name: 'Tipo',
    selector: 'type',
    sortable: true
  },
  {
    name: 'Comprador/Vendedor',
    selector: 'associate',
    right: true,
    sortable: true
  },
  {
    name: 'Ofertas',
    selector: 'offer',
    right: true,
    sortable: true
  },
  {
    name: 'Qtd',
    selector: 'qtd',
    right: true,
    sortable: true
  },
  {
    name: 'Valor',
    selector: 'value',
    sortable: true
  },
  {
    name: 'Data',
    selector: 'date',
    sortable: true
  },
  {
    name: ' ',
    selector: 'Action',
    sortable: false
  }
]

const TableCatirasAssociate = () => {
  const [data, setData] = useState<CatirasProps[]>([])
  const [dataView, setDataView] = useState<CatirasProps[]>([])
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const filteredItems = data.filter(
    (item: CatirasProps) =>
      (item.type &&
        item.type.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.associate &&
        item.associate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.offer &&
        item.offer.toLowerCase().includes(filterText.toLowerCase())) ||
      item.qtd ||
      item.value ||
      item.date
  )
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <SearchTableField
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  useEffect(() => {
    setDataView(filteredItems)
  }, [filterText])

  useEffect(() => {
    const Catiras = [
      {
        id: 1,
        type: 'Compra',
        associate: 'JKevin',
        offer: 'Criação de sites',
        qtd: 5,
        value: 152.25,
        date: '15/06/2020'
      },
      {
        id: 2,
        type: 'Venda',
        associate: 'JKevin',
        offer: 'Criação de sites',
        qtd: 5,
        value: 152.25,
        date: '15/06/2020'
      }
    ]
    setData(Catiras)
  }, [])

  return (
    <S.Wrapper>
      <DataTable
        title="HISTÓRICO DE COMPRA E VENDA"
        columns={columns}
        data={dataView}
        pagination
        highlightOnHover
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </S.Wrapper>
  )
}

export default TableCatirasAssociate
