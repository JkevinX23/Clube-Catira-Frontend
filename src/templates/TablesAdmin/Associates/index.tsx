import * as S from './styles'
import MaterialTable from 'material-table'
// import { useState } from 'react'

export default function ListAssociates() {
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
      title: 'Consultor',
      field: 'consultant',
      type: string
    },
    {
      title: 'Credito',
      field: 'credit',
      type: string
    },
    {
      title: 'Status',
      field: 'status',
      type: string
    }
  ]

  ///Tel. Fixo Tel. Celular Email CNPJ Localidade Consultor
  return (
    <S.Wrapper>
      <MaterialTable
        title="Associados"
        columns={columns}
        data={[]}
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
      />
    </S.Wrapper>
  )
}
