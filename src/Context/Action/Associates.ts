import api from 'services/api'
import { GetAssociatesAdmin, PostAssociateProps } from 'Types'

export const getAssociatesAdmin = async () =>
  api.get<GetAssociatesAdmin[]>('/associate/admin')

export const createAssociateAdmin = async (data: PostAssociateProps) =>
  api.post('/associate-auth', data)
