import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { GetConsultant } from 'Types'
import { getConsultants } from 'Context/Action/Consultant'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})
type props = {
  setId: (id: number) => void
}

export default function ListConsultants({ setId }: props) {
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
      title: 'Franquia',
      field: 'Franchise.name',
      type: string
    },
    {
      title: 'Identificação',
      field: 'identification',
      type: string
    },
    {
      title: 'Telefone',
      field: 'contact1',
      type: string
    },
    {
      title: 'Nº Associados',
      field: 'qtd_associados',
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
    }
  ]

  const [data, setData] = useState<GetConsultant[]>([])

  useEffect(() => {
    async function loadData() {
      const { data } = await getConsultants()
      setData(data.sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [])
  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Consultores"
          columns={columns}
          data={data}
          options={{ exportButton: true, exportAllData: true }}
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
                const row = rowData as GetConsultant
                setId(row.id)
              }
            }
          ]}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
