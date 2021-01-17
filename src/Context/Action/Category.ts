import api from 'services/api'
import {
  CategoriesProps,
  PostCategoryProps,
  PutCategoryProps,
  GetCategoriesNA
} from 'Types'

export const getCategoriesAdmin = async () =>
  api.get<CategoriesProps[]>('/category-auth')

export const getCategoriesNA = async () =>
  api.get<GetCategoriesNA[]>('/category')

export const postCategoryAdmin = async (data: PostCategoryProps) =>
  api.post('/category-auth', data)

export const putCategory = async (data: PutCategoryProps) =>
  api.put('/category', data)
