import * as S from './styles'
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Select from 'react-select'
import { useEffect, useState } from 'react'
import { getAssociates } from 'Context/Action/Associates'
import { AdjustmentProps, GetAssociatesAdmin } from 'Types'
import Button from 'components/Button'
import { FormatCurrency } from 'utils/Masks'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { getAdjustment, postAdjustment } from 'Context/Action/Adjustment'

export type ReportCardDashProps = {
  direct: number
  pending: number
}
const theme = createMuiTheme({
  overrides: {
    MuiTableRow: {
      root: {
        fontSize: '0.52em'
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '0.8em'
      }
    }
  }
})

const AdjustmentsCard = () => {
  const [id, setId] = useState<any>(0)
  const [associates, setAssociates] = useState<any>(null)
  const [adjustments, setAdj] = useState<AdjustmentProps[]>([])
  const [description, setDescription] = useState('')
  const [adjustmentValueFormatted, setAdjValFormatted] = useState('0,00')
  const [adjustmentValue, setAdjVal] = useState(0)
  const [loading, setLoading] = useState(false)
  const route = useRouter()
  function compare(a: GetAssociatesAdmin, b: GetAssociatesAdmin) {
    if (a.fantasy_name.toLowerCase() < b.fantasy_name.toLowerCase()) return -1
    if (a.fantasy_name.toLowerCase() > b.fantasy_name.toLowerCase()) return 1
    return 0
  }

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
      title: 'ID',
      field: 'id',
      type: string
    },
    {
      title: 'Associado',
      field: 'associate',
      type: string
    },
    {
      title: 'Valor',
      field: 'value',
      type: string
    },
    {
      title: 'Ajustado pela',
      field: 'performedBy',
      type: string
    }
  ]

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await getAssociates()
      const opt = data
        .sort(compare)
        .map((e) => ({ value: e.id, label: `${e.fantasy_name} - ${e.id}` }))
      setAssociates(opt)
    }

    async function loadAdjustments() {
      try {
        const { data } = await getAdjustment()
        console.log({ data })
        setAdj(data.reverse())
      } catch (err) {
        console.error(err)
        toast.error(
          'Erro ao carregar a tabela de Ajustes. Caso persista, entre em contato com o adminsitrador do sistema.'
        )
      }
    }
    loadAssociates()
    loadAdjustments()
  }, [])

  function mascaraMoeda(value: string) {
    const onlyDigits = value
      .split('')
      .filter((s: any) => /\d/.test(s))
      .join('')
      .padStart(2, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    if (Number(digitsFloat) >= 9999999) return
    setAdjValFormatted(FormatCurrency(Number(digitsFloat)))
    setAdjVal(Number(digitsFloat))
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      await postAdjustment({
        associate_id: id,
        description,
        value: adjustmentValue
      })
      toast.success('Ajuste realizado com sucesso')
      setLoading(false)
      try {
        const { data } = await getAdjustment()
        console.log({ data })
        setAdj(data.reverse())
      } catch (err) {
        console.error(err)
        toast.error(
          'Erro ao carregar a tabela de Ajustes. Caso persista, entre em contato com o adminsitrador do sistema.'
        )
      }
    } catch (err) {
      console.log(err)
      toast.error('Erro ao realizar ajuste.')
      setLoading(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Ajuste de Saldo</S.Title>
      <S.Section>
        <S.Form>
          <S.SelectWrapper>
            <S.Label>Associado</S.Label>
            <Select
              isClearable
              className="react-select-container"
              placeholder="Selecione"
              options={associates}
              onChange={(e) => setId(e?.value)}
            />
          </S.SelectWrapper>

          <S.SelectWrapper>
            <S.Label>Descrição: </S.Label>
            <S.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </S.SelectWrapper>

          <S.SelectWrapper>
            <S.Label>Insira o valor</S.Label>
            <S.InputDiv>
              <input
                onChange={(e) => mascaraMoeda(e.target.value)}
                value={adjustmentValueFormatted}
              />
            </S.InputDiv>
          </S.SelectWrapper>
          {!loading ? (
            <S.Button>
              <Button
                background="black"
                radius="radius100"
                onClick={() => handleSubmit()}
              >
                Confirmar
              </Button>
            </S.Button>
          ) : (
            <S.Label>Carregando...</S.Label>
          )}
        </S.Form>

        <S.Table>
          <MuiThemeProvider theme={theme}>
            <MaterialTable
              title={'Histórico'}
              columns={columns}
              data={adjustments}
              options={{
                exportButton: true,
                pageSize: 5,
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
      </S.Section>
    </S.Wrapper>
  )
}

export default AdjustmentsCard
