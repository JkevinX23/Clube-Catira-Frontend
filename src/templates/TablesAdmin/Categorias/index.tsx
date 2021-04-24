import * as S from './styles'
import {
  getCategoriesAdmin,
  postCategoryAdmin,
  putCategory
} from 'Context/Action/Category'
import MaterialTable from 'material-table'
import { useEffect, useState } from 'react'
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

export default function TableCategories() {
  const [categories, setCategories] = useState<any>([])
  type IType =
    | 'string'
    | 'boolean'
    | 'numeric'
    | 'date'
    | 'datetime'
    | 'time'
    | 'currency'
    | 'left'
    | 'never'
    | 'onUpdate'
  const string: IType = 'string'
  const numeric: IType = 'numeric'
  const left: IType = 'left'
  const never: IType = 'never'
  const onUpdate: IType = 'onUpdate'

  const columns = [
    { title: 'ID', field: 'id', type: numeric, align: left, editable: never },
    { title: 'Nome', field: 'name', type: string, align: left },
    {
      title: 'Status',
      field: 'isvalid',
      align: left,
      lookup: {
        true: 'Ativa',
        false: 'Cancelada'
      },
      editable: onUpdate
    }
  ]

  useEffect(() => {
    async function loadCategories() {
      const { data } = await getCategoriesAdmin()
      setCategories(data.sort((a, b) => b.id - a.id))
    }
    loadCategories()
  }, [])

  async function createCategory(payload: any) {
    try {
      await postCategoryAdmin(payload)
      toast.success('Categoria criada com sucesso!')
      const { data } = await getCategoriesAdmin()
      setCategories(data.sort((a, b) => b.id - a.id))
    } catch (error) {
      console.log(error)
      toast.warn('Algo deu errado!')
    }
  }

  async function editCategory(payload: any) {
    try {
      await putCategory(payload)
      const { data } = await getCategoriesAdmin()
      setCategories(data.sort((a, b) => b.id - a.id))
      toast.success('Categoria editada com sucesso!')
    } catch (err) {
      toast.warning('Algo deu errado!')
    }
  }

  return (
    <S.Wrapper>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Categorias"
          columns={columns}
          data={categories}
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
            onRowAdd: (newData) => createCategory(newData),
            onRowUpdate: (newData) => editCategory(newData)
          }}
        />
      </MuiThemeProvider>
    </S.Wrapper>
  )
}
