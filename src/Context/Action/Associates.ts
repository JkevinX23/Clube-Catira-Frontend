import api from 'services/api'
import { GetAssociatesAdmin } from 'Types'

export const getAssociatesAdmin = async () =>
  api.get<GetAssociatesAdmin[]>('/associate/admin')
