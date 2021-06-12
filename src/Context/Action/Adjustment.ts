import api from 'services/api'
import { AdjustmentProps } from 'Types'

export const postAdjustment = async (data: AdjustmentProps) =>
  api.post('/adjustment', data)
export const getAdjustment = async () =>
  api.get<AdjustmentProps[]>('/adjustment')
