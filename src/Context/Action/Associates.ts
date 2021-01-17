import api from 'services/api'
import {
  GetAssociatesAdmin,
  PostAssociateProps,
  ShowAssociateProps,
  PutAssociateProps,
  MyAccountInfoProps,
  GetAssociatesNoAuth,
  GetAssociatesAuth,
  GetCreditsProps
} from 'Types'

export const getAssociatesAdmin = async () =>
  api.get<GetAssociatesAdmin[]>('/associate/admin')

export const GetAssociatesNA = async () =>
  api.get<GetAssociatesNoAuth[]>('/associates-na')

export const GetAssociates = async () =>
  api.get<GetAssociatesAuth[]>('/associate')

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

export const getCredits = async () =>
  api.get<GetCreditsProps>('/associate/credits')
