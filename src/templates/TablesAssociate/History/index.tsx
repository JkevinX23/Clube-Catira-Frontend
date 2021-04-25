/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { AssociateHistoryProps } from 'Types'
import { FormatDateByFNS } from 'utils/Masks'
import { getHistoryAssociate } from 'Context/Action/Associates'
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
export default function HistoryAssociateTable() {
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
      title: 'Tipo',
      field: 'typeDesc',
      type: string
    },

    {
      title: 'Descrição',
      field: 'description',
      type: string
    },
    {
      title: 'Valor',
      field: 'value',
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
        '-1': 'Recusado',
        0: 'Pendente',
        1: 'Pendente/Em análise',
        2: 'Em análise',
        3: 'Paga',
        4: 'Paga',
        5: 'Em disputa',
        6: 'Cancelada',
        7: 'Cancelada',
        8: 'Cancelada',
        9: 'Cancelada',
        10: 'Liberado',
        11: 'Bloqueado'
      }
    },
    {
      title: 'Saldo',
      field: 'credits',
      type: string
    }
  ]

  const [history, setHistory] = useState<AssociateHistoryProps[]>([])

  useEffect(() => {
    async function loadData() {
      const { data } = await getHistoryAssociate()
      const revData = data.sort(
        (a: AssociateHistoryProps, b: AssociateHistoryProps) =>
          a.date < b.date ? -1 : 1
      )

      const hist = []
      for (let i = 0; i < revData.length; i += 1) {
        if (i === 0) {
          hist.push({
            ...revData[i],
            date: FormatDateByFNS(revData[i].date),
            credits: revData[i].value
          })
          continue
        }
        if (
          revData[i].typeDesc === 'Compra' &&
          (revData[i].status === 0 ||
            revData[i].status === 1 ||
            revData[i].status === 2 ||
            revData[i].status === 3 ||
            revData[i].status === 4 ||
            revData[i].status === 10)
        )
          hist.push({
            ...revData[i],
            date: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits - revData[i].value
          })
        else if (
          revData[i].typeDesc === 'Venda' &&
          (revData[i].status === 3 ||
            revData[i].status === 4 ||
            revData[i].status === 10)
        ) {
          hist.push({
            ...revData[i],
            date: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits + revData[i].value
          })
        } else {
          hist.push({
            ...revData[i],
            date: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits
          })
        }
      }
      setHistory(hist.reverse())
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title={'Histórico de movimentações'}
          columns={columns}
          data={history}
          options={{
            exportButton: true,
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, 50],
            emptyRowsWhenPaging: false
          }}
          localization={{
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
