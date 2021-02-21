import api from 'services/api'
import {
  GetFranchises,
  Franquia,
  PostFranchiseProps,
  PutFranchiseProps,
  FranchiseProfileProps
} from 'Types'

export const getFranchise = async () => api.get<GetFranchises[]>('/franchise')
export const showFranchise = async (id: number) =>
  api.get<Franquia>(`/franchise/show?id=${id}`)
export const PostFranchise = async (data: PostFranchiseProps) =>
  api.post('/franchise', data)
export const PutFranchise = async (data: PutFranchiseProps) =>
  api.put('/franchise', data)
export const GetFranchiseProfile = async () =>
  api.get<FranchiseProfileProps>('/franchise-profile')
