/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { AssociateHistoryProps } from 'Types'
import { FormatCurrency, FormatDateByFNS } from 'utils/Masks'
import { getHistoryAssociate } from 'Context/Action/Associates'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ptBR } from 'date-fns/locale'
import Button from 'components/Button'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})

registerLocale('pt-BR', ptBR)
setDefaultLocale('pt-BR')
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
      field: 'formatvalue',
      type: string
    },
    {
      title: 'Data',
      field: 'dateFormated',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      lookup: {
        '-1': 'Negado',
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
        10: 'Aprovado',
        11: 'Bloqueado',
        12: 'Revogado'
      }
    },
    {
      title: 'Saldo',
      field: 'formatCredits',
      type: string
    }
  ]

  const [history, setHistory] = useState<AssociateHistoryProps[]>([])
  const [filtered, setFiltered] = useState<AssociateHistoryProps[]>([])
  const [startDate, setStartDate] = useState(new Date('2021-04-02'))
  const [endDate, setEndDate] = useState(new Date())
  const [toggle, setToggle] = useState(false)

  function handleSelect({ selection }: any) {
    setStartDate(selection.startDate)
    setEndDate(selection.endDate)
  }

  function handleSubmit() {
    setFiltered(
      history.filter((hist) => {
        const date = new Date(hist.date)
        console.log(date)
        return date >= startDate && date <= endDate
      })
    )
  }

  useEffect(() => {
    async function loadData() {
      const { data } = await getHistoryAssociate()
      const revData = data
        .sort((a: AssociateHistoryProps, b: AssociateHistoryProps) =>
          a.date < b.date ? -1 : 1
        )
        .map((x: AssociateHistoryProps) => ({
          typeDesc: x.typeDesc,
          type: x.type,
          description: x.description,
          value: x.value,
          formatvalue: FormatCurrency(x.value),
          status: x.status,
          date: x.date
        }))

      const hist = []
      for (let i = 0; i < revData.length; i += 1) {
        if (i === 0) {
          hist.push({
            ...revData[i],
            dateFormated: FormatDateByFNS(revData[i].date),
            credits: 0,
            formatCredits: FormatCurrency(revData[i].value)
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
            dateFormated: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits - revData[i].value,
            formatCredits: FormatCurrency(
              hist[i - 1].credits - revData[i].value
            )
          })
        else if (
          revData[i].typeDesc === 'Venda' &&
          (revData[i].status === 3 ||
            revData[i].status === 4 ||
            revData[i].status === 10)
        ) {
          hist.push({
            ...revData[i],
            dateFormated: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits + revData[i].value,
            formatCredits: FormatCurrency(
              hist[i - 1].credits + revData[i].value
            )
          })
        } else {
          hist.push({
            ...revData[i],
            dateFormated: FormatDateByFNS(revData[i].date),
            credits: hist[i - 1].credits,
            formatCredits: FormatCurrency(hist[i - 1].credits)
          })
        }
      }
      const histReverse = hist.reverse()
      setHistory(histReverse)
      setFiltered(histReverse)
    }
    loadData()
  }, [])

  function handleToggle() {
    setFiltered(history)
    setToggle(!toggle)
  }

  return (
    <S.Macro>
      <S.Row>
        <Button
          size="xxsmall"
          fullWidth={false}
          radius="radius100"
          background="blue"
          onClick={() => handleToggle()}
        >
          {!toggle ? 'Filtro por data' : 'Fechar Filtro'}
        </Button>
        {toggle && (
          <>
            {' '}
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              locale="pt-BR"
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
            />
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              locale="pt-BR"
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
            />
            <Button
              size="xxsmall"
              fullWidth={false}
              radius="radius100"
              background="blue"
              onClick={handleSubmit}
            >
              Filtrar Histórico
            </Button>
            <Button
              size="xxsmall"
              fullWidth={false}
              radius="radius100"
              background="black"
              onClick={() => setFiltered(history)}
            >
              Limpar Filtro
            </Button>
          </>
        )}
      </S.Row>
      <S.Wrapper>
        <S.Table>
          <MuiThemeProvider theme={theme}>
            <MaterialTable
              title={'Histórico de movimentações'}
              columns={columns}
              data={filtered}
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
        </S.Table>
      </S.Wrapper>
    </S.Macro>
  )
}
