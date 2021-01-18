import * as S from './styles'
import MaterialTable from 'material-table'
import { GetOfferAdmin } from 'Types'
import { useState, useEffect } from 'react'
import { getOffersAdmin } from 'Context/Action/Offer'

type props = {
  setId: (id: number) => void
}

export default function OfferTable({ setId }: props) {
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
      title: 'Status',
      field: 'status',
      lookup: {
        0: 'Pendente',
        1: 'Ativa',
        2: 'Suspensa'
      }
    },
    {
      title: 'Franquia',
      field: 'Associated.Consultant.Franchise.name',
      type: string
    },
    {
      title: 'Vendedor',
      field: 'Associated.fantasy_name',
      type: string
    },
    {
      title: 'Oferta',
      field: 'title',
      type: string
    },
    {
      title: 'Valor',
      field: 'value_offer',
      type: string
    }
  ]

  const [data, setData] = useState<GetOfferAdmin[]>([])

  useEffect(() => {
    async function loadData() {
      const { data } = await getOffersAdmin()
      setData(data.reverse())
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MaterialTable
        title="Ofertas"
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
        actions={[
          {
            icon: 'visibility',
            tooltip: 'Ver Detalhes',
            onClick: (event, rowData) => {
              const row = rowData as GetOfferAdmin
              setId(row.id)
            }
          }
        ]}
      />
    </S.Wrapper>
  )
}
