import api from 'services/api'
import { GetFileProps } from 'Types'

export const postFile = async (data: File) =>
  api.post<GetFileProps>('/files', data)
