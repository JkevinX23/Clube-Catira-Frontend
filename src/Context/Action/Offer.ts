import api from 'services/api'
import {
  GetOfferProps,
  PostOfferProps,
  GetOfferAdmin,
  MyOffersProps,
  PutOffer,
  ShowOfferAdminProps,
  ShowOfferAssociateProps
} from 'Types'

export const getOffers = async () => api.get<GetOfferProps[]>('/offer')
export const getOffersAdmin = async () => api.get<GetOfferAdmin[]>('/offer')
export const postOffers = async (data: PostOfferProps) =>
  api.post('/offer', data)
export const showOffer = async (id: number) =>
  api.get<ShowOfferAdminProps | ShowOfferAssociateProps>(`/offer/show?id=${id}`)
export const getMyOffers = async () => api.get<MyOffersProps[]>('/myoffers')
export const putOptionOffer = async (data: PutOffer) => api.put('/offer', data)
export const getDirectOffers = async () => api.get<GetOfferProps[]>('/direct')
