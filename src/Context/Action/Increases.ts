import api from 'services/api'
import { IncreaseProps, GetIncreaseProps, IncreaseUpdateProps } from 'Types'

export const postIncrease = async (data: IncreaseProps) =>
  api.post('/increase', data)
export const getIncrease = async () => api.get<GetIncreaseProps[]>('/increase')
export const updateIncrease = async (data: IncreaseUpdateProps) =>
  api.put('/increase', data)
