import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getFranchise } from 'Context/Action/Franchise'
import { GetFranchises } from 'Types'

type props = {
  setId: (id: number) => void
}

export default function ListFranchise({ setId }: props) {
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
      title: 'Nome',
      field: 'name',
      type: string
    },
    {
      title: 'Email',
      field: 'email',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        0: 'Pendente',
        1: 'Ativo',
        2: 'Bloqueado'
      }
    },
    {
      title: 'Porcentagem',
      field: 'percentage',
      type: string
    },
    {
      title: 'Nº Associados',
      field: 'qtd_associados',
      type: string
    }
  ]

  const [data, setData] = useState<GetFranchises[]>([])

  useEffect(() => {
    async function loadData() {
      const { data } = await getFranchise()
      setData(data)
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MaterialTable
        title="Franquias"
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
              const row = rowData as GetFranchises
              setId(row.id)
              console.log('clicou')
              console.log(row.id)
            }
          }
        ]}
      />
    </S.Wrapper>
  )
}
