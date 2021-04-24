import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { getMyOffers, putOptionOffer } from 'Context/Action/Offer'
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

export default function TableListMyOffers() {
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
      title: 'Titulo',
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
      title: 'Vendidos',
      field: 'sell',
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([])
  useEffect(() => {
    async function loadData() {
      const { data } = await getMyOffers()
      const withQtd = data
        .map((c) =>
          c.quantity === 0 ? { ...c, quantity: 'Ilimitado' } : { ...c }
        )
        .reverse()
      const valueFormat = withQtd.map((c) =>
        c.value === 0 ? { ...c, value: 'A Negociar' } : { ...c }
      )
      setData(valueFormat)
    }
    loadData()
  }, [])

  async function handleCancelOffer(id: number) {
    try {
      await putOptionOffer({ offer_id: id, status: 2 })
      toast.success('Oferta desativada!')
      const { data } = await getMyOffers()
      const withQtd = data
        .map((c) =>
          c.quantity === 0 ? { ...c, quantity: 'Ilimitado' } : { ...c }
        )
        .reverse()
      const valueFormat = withQtd.map((c) =>
        c.value === 0 ? { ...c, value: 'A Negociar' } : { ...c }
      )
      setData(valueFormat)
    } catch (err) {
      console.log(err)
      toast.warn('Aldo deu errado, tente novamente')
    }
  }

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Minhas Ofertas"
          columns={columns}
          data={data}
          options={{ exportButton: true }}
          localization={{
            header: { actions: 'Desativar' },
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
              icon: 'clear',
              tooltip: 'Desativar oferta',
              onClick: (event, rowData: any) =>
                handleCancelOffer(rowData.id as number)
            }
          ]}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
