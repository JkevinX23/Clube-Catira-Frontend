import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getIncrease, updateIncrease } from 'Context/Action/Increases'
import { FormatDateByFNS } from 'utils/Masks'
import { toast } from 'react-toastify'
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
export default function IncreasesTable() {
  type IType =
    | 'string'
    | 'boolean'
    | 'numeric'
    | 'date'
    | 'datetime'
    | 'time'
    | 'currency'
  const string: IType = 'string'

  type EType = 'never' | 'onUpdate' | 'onAdd' | 'always'

  const never: EType = 'never'
  const columns = [
    {
      title: 'REF.',
      field: 'id',
      type: string,
      editable: never
    },
    {
      title: 'Associado',
      field: 'associate',
      type: string,
      editable: never
    },
    {
      title: 'Status Solicitação',
      field: 'status',
      type: string,
      lookup: {
        0: 'Pendente',
        1: 'Aprovado',
        2: 'Reprovado'
      }
    },
    {
      title: 'Valor',
      field: 'value',
      type: string
    },
    {
      title: 'Motivo',
      field: 'reason',
      type: string,
      editable: never
    },
    {
      title: 'Data Solicitação',
      field: 'date',
      type: string,
      editable: never
    },
    {
      title: 'Aprovado/Negado por',
      field: 'updatedby',
      type: string,
      editable: never
    }
  ]

  const [increases, setIncreases] = useState<any>()
  useEffect(() => {
    async function loadIncreases() {
      const { data } = await getIncrease()

      const payload = data.map((e) => ({
        ...e,
        date: FormatDateByFNS(e.createdAt)
      }))
      setIncreases(payload.reverse())
    }
    loadIncreases()
  }, [])

  async function handleUpdate(id: string, value: string, status: string) {
    try {
      await updateIncrease({
        id: Number(id),
        value: Number(value),
        status: Number(status)
      })
      const { data } = await getIncrease()

      const payload = data.map((e) => ({
        ...e,
        date: FormatDateByFNS(e.createdAt)
      }))
      setIncreases(payload.reverse())
      toast.success('Ação realizada com sucesso!')
    } catch (err) {
      console.log(err)
      toast.warn(
        'Algo de errado ocorreu, caso persista, contate o administrador do sistema. '
      )
    }
  }

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Aumentos"
          columns={columns}
          data={increases}
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
          editable={{
            onRowUpdate: (newData: any, oldData: any) =>
              handleUpdate(oldData.id, newData.value, newData.status)
          }}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
