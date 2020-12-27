import * as S from './styles'
import MaterialTable from 'material-table'
// import { useState } from 'react'

export default function TransactionTableAdmin() {
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
      title: 'Data',
      field: 'created_at',
      type: string
    },
    {
      title: 'Franquia',
      field: 'franchise',
      type: string
    },
    {
      title: 'Comprador',
      field: 'purchase',
      type: string
    },
    {
      title: 'Oferta',
      field: 'offer',
      type: string
    },
    {
      title: 'QTD',
      field: 'quantity',
      type: string
    },
    {
      title: 'Valor',
      field: 'value',
      type: string
    }
  ]

  return (
    <S.Wrapper>
      <MaterialTable
        title="Transações"
        columns={columns}
        data={[]}
        options={{ exportButton: true }}
        localization={{
          header: { actions: 'Ações' },
          toolbar: {
            exportAriaLabel: 'Exportar como CSV',
            searchPlaceholder: 'Buscar',
            searchTooltip: 'Buscar na tabela'
          },
          pagination: {
            labelRowsSelect: 'Registros por página'
          },
          body: {
            editRow: {
              deleteText: 'Deseja mesmo apagar essa ong?'
            }
          }
        }}
      />
    </S.Wrapper>
  )
}
