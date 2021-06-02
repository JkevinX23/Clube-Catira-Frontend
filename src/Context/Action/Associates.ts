import api from 'services/api'
import {
  GetAssociatesAdmin,
  PostAssociateProps,
  ShowAssociateProps,
  PutAssociateProps,
  MyAccountInfoProps,
  GetAssociatesNoAuth,
  GetAssociatesAuth,
  GetCreditsProps,
  PutAssociatePropsAssociate,
  ContactAssociateProps,
  HasDirectProps,
  RequestDocument,
  AdesaoProps
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

export const showAssociateAssociate = async (id: number) =>
  api.get<ContactAssociateProps>(`/associate/show?id=${id}`)

export const getAssociates = async () =>
  api.get<GetAssociatesAdmin[]>('/associate')

export const getProfileAssociate = async () =>
  api.get<MyAccountInfoProps>('/profile')

export const getCredits = async () =>
  api.get<GetCreditsProps>('/associate/credits')

export const createAssociateNA = async (data: PostAssociateProps) =>
  api.post('/associate', data)

export const getHistoryAssociate = async () => api.get('/history')

export const updateAssociate = async (data: PutAssociatePropsAssociate) =>
  api.put('/associate', data)

export const hasDirectOffer = async () => api.get<HasDirectProps>('hasdirect')
export const documentAdesao = async (data: RequestDocument) =>
  api.post<AdesaoProps>('/document', data)
