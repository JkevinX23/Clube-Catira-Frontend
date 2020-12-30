import api from 'services/api'
import {
  Consultant,
  GetConsultant,
  PostConsultantProps,
  PutConsultantProps
} from 'Types'
export const getConsultants = async () =>
  api.get<GetConsultant[]>('/consultant')
export const showConsultant = async (id: number) =>
  api.get<Consultant>(`/consultant/show?id=${id}`)
export const postConsultant = async (data: PostConsultantProps) =>
  api.post('/consultant', data)
export const putConsultant = async (data: PutConsultantProps) =>
  api.put('/consultant', data)
