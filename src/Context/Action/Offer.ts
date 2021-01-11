import api from 'services/api'
import {
  GetOfferProps,
  PostOfferProps,
  GetOfferAdmin,
  MyOffersProps
} from 'Types'

export const getOffers = async () => api.get<GetOfferProps[]>('/offer')
export const getOffersAdmin = async () => api.get<GetOfferAdmin[]>('/offer')
export const postOffers = async (data: PostOfferProps) =>
  api.post('/offer', data)
export const showOffer = async (id: number) =>
  api.get<GetOfferAdmin>(`/offer/show?id=${id}`)
export const getMyOffers = async () => api.get<MyOffersProps[]>('/myoffers')
