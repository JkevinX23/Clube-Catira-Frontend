import api from 'services/api'
import {
  GetAssociatesAdmin,
  PostAssociateProps,
  ShowAssociateProps
} from 'Types'

export const getAssociatesAdmin = async () =>
  api.get<GetAssociatesAdmin[]>('/associate/admin')

export const createAssociateAdmin = async (data: PostAssociateProps) =>
  api.post('/associate-auth', data)

export const showAssociate = async (id: number) =>
  api.get<ShowAssociateProps>(`/associate/show?id=${id}`)
