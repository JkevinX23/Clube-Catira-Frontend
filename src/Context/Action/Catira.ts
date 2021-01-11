import api from 'services/api'
import { PostCatira, ResponsePostCatira, MyCatiraProps } from 'Types'

export const PurschaseOffer = async (data: PostCatira) =>
  api.post<ResponsePostCatira>('/catira', data)

export const GetMyCatiras = async () => api.get<MyCatiraProps>('/catira')
