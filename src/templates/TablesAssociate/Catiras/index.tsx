/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { GetMyCatiras } from 'Context/Action/Catira'
import { PurchaseSalesProps } from 'Types'
import { FormatDateByFNS } from 'utils/Masks'
import Button from 'components/Button'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { toast } from 'react-toastify'

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})
type MyCatirasTableProps = {
  setTrasnsactionId: (id: number) => void
  setIsSale: (value: boolean) => void
}

export default function MyCatirasTable({
  setTrasnsactionId,
  setIsSale
}: MyCatirasTableProps) {
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
      title: 'Tipo',
      field: 'type',
      type: string
    },
    {
      title: 'Associado',
      field: 'associate',
      type: string
    },
    {
      title: 'Oferta',
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
      title: 'Data',
      field: 'date',
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

  const [transactions, SetTransactions] = useState<PurchaseSalesProps[]>([])
  useEffect(() => {
    async function loadData() {
      const { data } = await GetMyCatiras()
      const p = data.purchases
      const s = data.sales

      const pf = p.map((a: PurchaseSalesProps) => ({
        ...a,
        date: FormatDateByFNS(a.date),
        value: `Ctz: ${Number(a.value).toFixed(2)}`,
        type: 'compra',
        flag: 1
      }))

      const sf = s.map((a: PurchaseSalesProps) => ({
        ...a,
        date: FormatDateByFNS(a.date),
        value: `Ctz ${Number(a.value).toFixed(2)}`,
        type: 'venda',
        flag: 2
      }))

      SetTransactions(pf.concat(sf).sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title={'Minhas Transações'}
          columns={columns}
          data={transactions}
          options={{
            exportButton: true,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
            emptyRowsWhenPaging: false
          }}
          localization={{
            header: { actions: 'Detalhes' },
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
              icon: 'payment',
              tooltip: 'Ver Fatura',
              onClick: (_event, rowData) => {
                const row = rowData as PurchaseSalesProps
                if (row.status > 2) {
                  toast.warn(
                    'Não foi possível ver abrir essa fatura pois ela já foi finalizada.'
                  )
                  return
                }
                window.open(
                  `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${row.fat}`
                )
              }
            },
            {
              icon: 'open_in_new',
              tooltip: 'Detalhes',
              onClick: (_event, rowData: any) => {
                const row = rowData
                console.log(row.type === 'venda')
                setTrasnsactionId(row.id)
                setIsSale(row.type === 'venda')
              }
            }
          ]}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
