import api from 'services/api'
import { GetOfferProps, PostOfferProps, GetOfferAdmin } from 'Types'

export const getOffers = async () => api.get<GetOfferProps[]>('/offer')
export const getOffersAdmin = async () => api.get<GetOfferAdmin[]>('/offer')
export const postOffers = async (data: PostOfferProps) =>
  api.post('/offer', data)
