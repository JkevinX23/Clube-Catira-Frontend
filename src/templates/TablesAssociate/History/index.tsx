/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { AssociateHistoryProps } from 'Types'
import { FormatCurrency, FormatDateByFNS } from 'utils/Masks'
import { getHistoryAssociate } from 'Context/Action/Associates'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import {
  defaultStaticRanges,
  defaultInputRanges
} from 'react-date-range/dist/defaultRanges'
import { ptBR } from 'date-fns/locale'
import Button from 'components/Button'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from 'react-date-range'
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
      field: 'formatCredits',
      type: string
    }
  ]

  const [history, setHistory] = useState<AssociateHistoryProps[]>([])
  const [filtered, setFiltered] = useState<AssociateHistoryProps[]>([])
  const [startDate, setStartDate] = useState(new Date('2021-04-02'))
  const [endDate, setEndDate] = useState(new Date())
  const [toggle, setToggle] = useState(false)

  const staticRangesLabels = {
    Today: 'Hoje',
    Yesterday: 'Ontem',
    'This Week': 'Essa semana',
    'Last Week': 'Semana passada',
    'This Month': 'Esse mês',
    'Last Month': 'Mês passado'
  }

  const inputRangesLabels = {
    'days up to today': 'Dias até hoje',
    'days starting today': 'Dias começando de hoje'
  }

  function translateRange(dictionary: any) {
    return (item: any) =>
      dictionary[item.label] ? { ...item, label: dictionary[item.label] } : item
  }

  const brStaticRanges = defaultStaticRanges.map(
    translateRange(staticRangesLabels)
  )
  const brInputRanges = defaultInputRanges.map(
    translateRange(inputRangesLabels)
  )
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
      {
        <Button
          size="xsmall"
          fullWidth={false}
          radius="radius100"
          background="black"
          onClick={() => handleToggle()}
        >
          {!toggle ? 'Filtrar por Data' : 'Limpar filtro'}
        </Button>
      }
      <S.Wrapper>
        {toggle && (
          <S.DatePicker>
            <DateRange
              ranges={[{ startDate, endDate, key: 'selection' }]}
              staticRanges={brStaticRanges}
              inputRanges={brInputRanges}
              onChange={handleSelect}
              locale={ptBR}
            />

            <S.Row>
              <Button
                size="xsmall"
                fullWidth={false}
                radius="radius100"
                background="blue"
                onClick={handleSubmit}
              >
                Filtrar Histórico
              </Button>
              <Button
                size="xsmall"
                fullWidth={false}
                radius="radius100"
                background="black"
                onClick={() => setFiltered(history)}
              >
                Limpar Filtro
              </Button>
            </S.Row>
          </S.DatePicker>
        )}
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
