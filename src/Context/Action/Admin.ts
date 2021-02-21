import api from 'services/api'
import { AdminProfileProps } from 'Types'

export const getAdminProfile = async () =>
  api.get<AdminProfileProps>('/admin-profile')
