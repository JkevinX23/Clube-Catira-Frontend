/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { GetMyCatiras } from 'Context/Action/Catira'
import { PurchaseSalesProps } from 'Types'
import { FormatDateByFNS } from 'utils/Masks'

export default function MyCatirasTable() {
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
      title: 'Voucher',
      field: 'voucher',
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
        1: 'Ativo',
        2: 'Inativo'
      }
    }
  ]

  const [purchases, setPurchases] = useState<PurchaseSalesProps[]>([])
  const [sales, setSales] = useState<PurchaseSalesProps[]>([])
  const [selector, setSelector] = useState(false)
  useEffect(() => {
    async function loadData() {
      const { data } = await GetMyCatiras()
      const p = data.purchases.sort((a, b) => b.id - a.id)
      setPurchases(
        p.map((a: PurchaseSalesProps) => ({
          ...a,
          date: FormatDateByFNS(a.date)
        }))
      )
      const s = data.sales.sort((a, b) => b.id - a.id)
      setSales(
        s.map((a: PurchaseSalesProps) => ({
          ...a,
          date: FormatDateByFNS(a.date)
        }))
      )
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <button onClick={() => setSelector(!selector)}>
        {selector ? 'Minhas Vendas' : 'Minhas Compras'}
      </button>
      <MaterialTable
        title="Minhas Ofertas"
        columns={columns}
        data={selector ? purchases : sales}
        options={{ exportButton: true }}
        localization={{
          header: { actions: 'Ver Fatura' },
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
          //@ts-ignore
          selector && {
            icon: 'payment',
            tooltip: 'Ver Fatura',
            onClick: (_event, rowData) => {
              const row = rowData as PurchaseSalesProps
              window.open(
                `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${row.fat}`
              )
            }
          }
        ]}
      />
    </S.Wrapper>
  )
}
