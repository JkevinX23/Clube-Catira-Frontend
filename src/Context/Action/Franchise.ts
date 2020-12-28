import api from 'services/api'
import { GetFranchises, Franquia } from 'Types'

export const getFranchise = async () => api.get<GetFranchises[]>('/franchise')
export const showFranchise = async (id: number) =>
  api.get<Franquia>(`/franchise/show?id=${id}`)
