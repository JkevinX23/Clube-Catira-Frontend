import api from 'services/api'
import {
  GetAssociatesAdmin,
  PostAssociateProps,
  ShowAssociateProps,
  PutAssociateProps,
  MyAccountInfoProps
} from 'Types'

export const getAssociatesAdmin = async () =>
  api.get<GetAssociatesAdmin[]>('/associate/admin')

export const createAssociateAdmin = async (data: PostAssociateProps) =>
  api.post('/associate-auth', data)

export const updateAssociateAdmin = async (data: PutAssociateProps) =>
  api.put('/associate', data)

export const showAssociate = async (id: number) =>
  api.get<ShowAssociateProps>(`/associate/show?id=${id}`)
export const getAssociates = async () =>
  api.get<GetAssociatesAdmin[]>('/associate')

export const getProfileAssociate = async () =>
  api.get<MyAccountInfoProps>('/profile')
