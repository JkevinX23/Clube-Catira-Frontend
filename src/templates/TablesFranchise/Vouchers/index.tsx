import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getVoucherByTransaction } from 'Context/Action/Voucher'
import { FormatDateByFNS } from 'utils/Masks'
import Button from 'components/Button'
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
type Props = {
  id: number
  setTrasnsactionId: (id: number) => void
}
export default function TableListVouchers({ id, setTrasnsactionId }: Props) {
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
      title: 'Codigo',
      field: 'code',
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
      title: 'Data Compra',
      field: 'date',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        0: 'Pendente',
        1: 'Ativo',
        2: 'Utilizado',
        3: 'Cancelado'
      }
    }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([])
  useEffect(() => {
    async function loadData() {
      const { data } = await getVoucherByTransaction(id)
      const payload = data.map((v) => ({
        ...v,
        value: `Ctz ${v.ctz_value.toFixed(2)}`,
        date: FormatDateByFNS(v.createdAt),
        title: `${v.Offer.id} - ${v.Offer.title}`
      }))
      setData(payload.sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [id])

  return (
    <S.Wrapper>
      <S.Button>
        <Button
          size="xsmall"
          radius="radius100"
          background="green"
          onClick={() => setTrasnsactionId(0)}
        >
          Voltar
        </Button>
      </S.Button>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title={`Vouchers gerados pela transação Nº${id}`}
          columns={columns}
          data={data}
          options={{ exportButton: true }}
          localization={{
            header: { actions: 'Ações' },
            body: {
              emptyDataSourceMessage:
                'Os vouchers referentes a essa transação ainda não foram gerados.'
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
