import * as S from './styles'
import MaterialTable from 'material-table'
import { useState } from 'react'

export default function ListConsultants() {
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
      title: 'Franquia',
      field: 'franchise',
      type: string
    },
    {
      title: 'Identificação',
      field: 'identification',
      type: string
    },
    {
      title: 'Telefone',
      field: 'contact1',
      type: string
    },
    {
      title: 'Nº Associados',
      field: 'qtd_associates',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      type: string
    }
  ]
  return (
    <S.Wrapper>
      <MaterialTable
        title="Associados"
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
