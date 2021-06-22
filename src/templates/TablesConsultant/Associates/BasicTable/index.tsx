import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { GetAssociatesList } from 'Context/Action/Associates'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { toast } from 'react-toastify'

type props = {
  setId: (id: number) => void
}

type props2 = {
  id: number
}

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})

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
      title: 'Nome Fantasia',
      field: 'fantasy_name',
      type: string
    },
    {
      title: 'Razão Social',
      field: 'company_name',
      type: string
    },
    {
      title: 'Responsável',
      field: 'representative',
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
      title: 'Tipo',
      field: 'type',
      lookup: {
        1: 'Visivel',
        2: 'Oculto'
      }
    }
  ]

  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const { data } = await GetAssociatesList(1)
        setData(data.sort((a, b) => b.id - a.id))
        setLoading(false)
        toast.success('Dados carregados com sucesso!')
      } catch (err) {
        console.log(err)
        toast.error('Erro ao carregar os associados')
        setLoading(false)
      }
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        {loading ? (
          <h1>Carregando... </h1>
        ) : (
          <MaterialTable
            title="Associados"
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
                  const row = rowData as props2
                  setId(row.id)
                }
              }
            ]}
          />
        )}
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
