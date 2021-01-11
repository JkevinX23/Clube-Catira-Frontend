import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getMyOffers } from 'Context/Action/Offer'

export default function TableListMyOffers() {
  type IType =
    | 'string'
    | 'boolean'
    | 'numeric'
    | 'date'
    | 'datetime'
    | 'time'
    | 'currency'
  const string: IType = 'string'
  const columns = [
    {
      title: 'REF.',
      field: 'id',
      type: string
    },
    {
      title: 'Titulo',
      field: 'title',
      type: string
    },
    {
      title: 'Valor',
      field: 'value',
      type: string
    },
    {
      title: 'Qtd',
      field: 'quantity',
      type: string
    },
    {
      title: 'Vendidos',
      field: 'sell',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        0: 'Pendente',
        1: 'Ativo',
        2: 'Inativo'
      }
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([])
  useEffect(() => {
    async function loadData() {
      const { data } = await getMyOffers()
      setData(data.sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MaterialTable
        title="Minhas Ofertas"
        columns={columns}
        data={data}
        options={{ exportButton: true }}
        localization={{
          header: { actions: 'Ações' },
          body: {
            emptyDataSourceMessage: 'Nenhum registro para exibir'
          },
          toolbar: {
            exportCSVName: 'Exportar como CSV',
            exportPDFName: 'Exportar como PDF',
            exportTitle: 'Exportar',
            searchPlaceholder: 'Buscar',
            searchTooltip: 'Buscar na tabela'
          },
          pagination: {
            labelRowsSelect: 'Registros por página',
            labelDisplayedRows: '{count} de {from}-{to}',
            firstTooltip: 'Primeira página',
            previousTooltip: 'Página anterior',
            nextTooltip: 'Próxima página',
            lastTooltip: 'Última página'
          }
        }}
        // actions={[
        //   {
        //     icon: 'visibility',
        //     tooltip: 'Ver Detalhes',
        //     onClick: (event, rowData) => {
        //       const row = rowData as props2
        //       setId(row.id)
        //     }
        //   }
        // ]}
      />
    </S.Wrapper>
  )
}
