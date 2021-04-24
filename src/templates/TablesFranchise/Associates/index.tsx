import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getAssociatesAdmin } from 'Context/Action/Associates'
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

type props2 = {
  id: number
}

export default function ListAssociates({ setId }: props) {
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
      title: 'Associado',
      field: 'fantasy_name',
      type: string
    },
    {
      title: 'Consultor',
      field: 'Consultant.identification',
      type: string
    },
    {
      title: 'Credito',
      field: 'credit',
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

  ///Tel. Fixo Tel. Celular Email CNPJ Localidade Consultor

  const [data, setData] = useState<any>()
  useEffect(() => {
    async function loadData() {
      const { data } = await getAssociatesAdmin()
      setData(data.sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Associados"
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
                const row = rowData as props2
                setId(row.id)
              }
            }
          ]}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
