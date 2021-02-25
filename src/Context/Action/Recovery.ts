import api from 'services/api'
import { RecoveryProps } from 'Types'

export const resetPassword = async (data: RecoveryProps) =>
  api.post('/reset', data)
