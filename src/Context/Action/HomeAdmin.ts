import api from 'services/api'
import { GetHomeAdmin } from 'Types'

export const getHomeAdmin = async () => api.get<GetHomeAdmin[]>('/home-admin')
