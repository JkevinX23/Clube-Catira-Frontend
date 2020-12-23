import api from 'services/api'
import { GetOfferProps, PostOfferProps } from 'Types'

export const getOffers = async () => api.get<GetOfferProps[]>('/offer')
export const postOffers = async (data: PostOfferProps) =>
  api.post('/offer', data)
