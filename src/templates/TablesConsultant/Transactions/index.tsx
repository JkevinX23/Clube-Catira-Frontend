import * as S from './styles'
import MaterialTable from 'material-table'
// import { useState } from 'react'
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
      field: 'created_at',
      type: string
    },
    {
      title: 'Vendedor',
      field: 'franchise',
      type: string
    },
    {
      title: 'Comprador',
      field: 'purchase',
      type: string
    },
    {
      title: 'Oferta',
      field: 'offer',
      type: string
    },
    {
      title: 'QTD',
      field: 'quantity',
      type: string
    },
    {
      title: 'Valor',
      field: 'value',
      type: string
    }
  ]

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Transações"
          columns={columns}
          data={[]}
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
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
