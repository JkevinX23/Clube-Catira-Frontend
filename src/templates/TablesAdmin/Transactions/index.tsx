import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getCatirasFranchise } from 'Context/Action/Catira'
import { toast } from 'react-toastify'
import { FormatDateByFNS } from 'utils/Masks'
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
export default function TransactionTableAdmin() {
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
      title: 'Data',
      field: 'date',
      type: string
    },
    {
      title: 'Vendedor',
      field: 'seller',
      type: string
    },
    {
      title: 'Comprador',
      field: 'buyer',
      type: string
    },
    {
      title: 'Oferta',
      field: 'offer',
      type: string
    },
    {
      title: 'Valor (R$)',
      field: 'value',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        0: 'Pendente',
        1: 'Aguardando pagamento',
        2: 'Em análise',
        3: 'Paga',
        4: 'Paga',
        5: 'Em disputa',
        6: 'Cancelada',
        7: 'Cancelada',
        8: 'Cancelada',
        9: 'Em cancelamento'
      }
    }
  ]

  const [payload, setPayload] = useState<any>()
  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await getCatirasFranchise()
        setPayload(
          data
            .map((t) => ({ ...t, date: FormatDateByFNS(t.date) }))
            .sort((a, b) => b.id - a.id)
        )
      } catch (err) {
        console.log(err)
        toast.warn(
          'Algo de errado aconteceu ao carregar as transações. Tente novamente.'
        )
        toast.warn('Caso persista, contate o administrador do sistema.')
      }
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Transações"
          columns={columns}
          data={payload}
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
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
