import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getVoucherByTransaction } from 'Context/Action/Voucher'
import { FormatDateByFNS } from 'utils/Masks'

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
      field: 'Offer.title',
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
        date: FormatDateByFNS(v.createdAt)
      }))
      setData(payload.sort((a, b) => b.id - a.id))
    }
    loadData()
  }, [id])

  return (
    <S.Wrapper>
      <button onClick={() => setTrasnsactionId(0)}>Voltar</button>
      <MaterialTable
        title="Vouchers Gerados"
        columns={columns}
        data={data}
        options={{ exportButton: true }}
        localization={{
          header: { actions: 'Ações' },
          body: {
            emptyDataSourceMessage:
              'Seus vouchers serão gerados quando o pagamento for confirmado'
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
    </S.Wrapper>
  )
}
