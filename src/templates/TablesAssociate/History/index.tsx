/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as S from './styles'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
import { AssociateHistoryProps } from 'Types'
import { FormatDateByFNS } from 'utils/Masks'
import { getHistoryAssociate } from 'Context/Action/Associates'

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
        9: 'Cancelada'
      }
    }
  ]

  const [history, setHistory] = useState<AssociateHistoryProps[]>([])

  useEffect(() => {
    async function loadData() {
      const { data } = await getHistoryAssociate()
      setHistory(
        data.map((a: AssociateHistoryProps) => ({
          ...a,
          date: FormatDateByFNS(a.date)
        }))
      )
    }
    loadData()
  }, [])

  return (
    <S.Wrapper>
      <MaterialTable
        title={'Histórico de movimentações'}
        columns={columns}
        data={history}
        options={{ exportButton: true }}
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
    </S.Wrapper>
  )
}
