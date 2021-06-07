import api from 'services/api'
import { AdminProfileProps, AdminPutProps } from 'Types'

export const getAdminProfile = async () =>
  api.get<AdminProfileProps>('/admin-profile')
export const putAdmin = async (data: AdminPutProps) => api.put('/admin', data)
