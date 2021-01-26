import api from 'services/api'
import { IncreaseProps } from 'Types'

export const postIncrease = async (data: IncreaseProps) =>
  api.post('/increase', data)
