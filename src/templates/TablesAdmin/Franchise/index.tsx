import * as S from './styles'
import MaterialTable from 'material-table'
import { useState } from 'react'

export default function ListFranchise() {
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
      title: 'Nome',
      field: 'name',
      type: string
    },
    {
      title: 'Email',
      field: 'email',
      type: string
    },
    {
      title: 'Total Vendido',
      field: 'totalsold',
      type: string
    },
    {
      title: 'Comissao',
      field: 'commission',
      type: string
    },
    {
      title: 'Nº Associados',
      field: 'qtd_associates',
      type: string
    }
  ]
  return (
    <S.Wrapper>
      <MaterialTable
        title="Franquias"
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
