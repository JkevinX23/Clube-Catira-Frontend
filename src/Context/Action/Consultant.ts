import api from 'services/api'
import { Consultant, GetConsultant } from 'Types'
export const getConsultants = async () =>
  api.get<GetConsultant[]>('/consultant')
export const showConsultant = async (id: number) =>
  api.get<Consultant>(`/consultant/show?id=${id}`)
