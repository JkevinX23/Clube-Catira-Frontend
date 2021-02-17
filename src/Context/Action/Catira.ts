import api from 'services/api'
import {
  PostCatira,
  ResponsePostCatira,
  MyCatiraProps,
  CatirasFranchiseProps
} from 'Types'

export const PurschaseOffer = async (data: PostCatira) =>
  api.post<ResponsePostCatira>('/catira', data)

export const GetMyCatiras = async () => api.get<MyCatiraProps>('/catira')
export const getCatirasFranchise = async () =>
  api.get<CatirasFranchiseProps[]>('/catira')
