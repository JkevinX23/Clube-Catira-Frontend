import api from 'services/api'
import { GetFileProps } from 'Types'

export const postFile = async (data: FormData) =>
  api.post<GetFileProps>('files', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
