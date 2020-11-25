import { useState, useMemo } from 'react'
import * as S from './styles'
import DataTable from 'react-data-table-component'
import SearchTableField from 'components/SearchTableField'

const columns = [
  {
    name: 'Nº Pedido',
    selector: 'id',
    sortable: true
  },
  {
    name: 'Tipo',
    selector: 'tipo',
    sortable: true
  },
  {
    name: 'Comprador/Vendedor',
    selector: 'Comprador/Vendedor',
    right: true,
    sortable: true
  },
  {
    name: 'Ofertas',
    selector: 'Ofertas',
    right: true,
    sortable: true
  },
  {
    name: 'Qtd',
    selector: 'Qtd',
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
    selector: 'Data',
    sortable: true
  },
  {
    name: ' ',
    selector: 'Action',
    sortable: false
  }
]

type dataProps = {
  name?: string
}

const data = [{}]

const TableCatirasAssociate = () => {
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const filteredItems = data.filter(
    (item: dataProps) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
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
  return (
    <S.Wrapper>
      <DataTable
        title="HISTÓRICO DE COMPRA E VENDA"
        columns={columns}
        data={data}
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
