import { CardPendingOffDashProps } from 'components/CardPendingOffDash'

export interface Login {
  email: string
  password: string
}
export interface LoginResponse {
  token: string
  signed: string
  option: number
  client: Administrador | Franquia | Associate
}

export interface Administrador {
  name: string
  email: string
  company_name: string
  contact: string
  document: string
  getway_email: string
  getway_token: string
}

export interface Franquia {
  name: string
  company_name: string
  email: string
  contact1: string
  contact2?: string
  document: string
  status: number
  percentage: number
  ie?: number
  im?: number
  getway_email: string
  getway_token: string
  address?: Address
}

export interface Address {
  id: number
  cep: string
  state: string
  city: string
  street: string
  neighborhood: string
  number: string
  complement: string
}

export interface Associate {
  description: string
  site?: string
  facebook?: string
  instagram?: string
  fantasy_name: string
  company_name?: string
  document: string
  representative: string
  contact1: string
  contact2?: string
  email: string
  percentage: number
  credit: number
  status: number
  type: number
  createdAt?: Date
}

export interface Option {
  key: number
  value: string
}

export interface FilterProps {
  citys: Option[]
  associates: Option[]
  setCity?: (value: string) => void
  setAssociate?: (value: string) => void
}

export type AssociateHeaderProps = {
  associate: string
  credits: number
}

export type ProdTypes = {
  id: number
  img: string
  associate: string
  city: string
  state: string
  value: string
  name: string
  title: string
}

export interface HomeProps {
  HeaderProps: AssociateHeaderProps
  Products: GetOfferProps[]
  Filters: FilterProps
}

export interface HomeAdminProps {
  name: string
  role: string
}
export interface HomeDashAdminProps {
  name: string
  role: string
  page_data: GetHomeAdmin
}

export interface GetOfferProps {
  id: number
  title: string
  description: string
  value_offer: number
  consumer_cards: number
  quantity: number
  createdAt?: string
  updatedAt?: string
  file_id: number
  associate_id: number
  directed_associate_id?: number | null
  File: {
    url: string
    id: number
    path: string
  }
  Associated: {
    id: number
    description: string
    fantasy_name: string
    company_name: string
    file_id: number
    category_id: number
    address_id: number
    Address: {
      id: number
      city: string
      state: string
    }
  }
}

export interface PostOfferProps {
  title: string
  description: string
  value_offer?: number
  consumer_cards: number
  quantity?: number
  file_id: number
  associate_id?: number
  createdAt?: Date
  directed_associate_id?: number
}

interface EventTarget {
  files: any
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void
  dispatchEvent(evt: Event): boolean
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void
}

export interface SyntheticEvent {
  bubbles: boolean
  cancelable: boolean
  currentTarget: EventTarget
  defaultPrevented: boolean
  eventPhase: number
  isTrusted: boolean
  nativeEvent: Event
  preventDefault(): void
  stopPropagation(): void
  target: EventTarget
  timeStamp: Date
  type: string
}

export interface newAssociate {
  id: number
  fantasy_name: string
}

export interface GetHomeAdmin {
  qtd_associates: number
  pending: number
  paid: number
  qtd_offers: number
  paid_vouchers: number
  pending_vouchers: number
  new_associates: newAssociate[]
  pending_offers: CardPendingOffDashProps[]
}

export interface GetFranchises {
  id: number
  name: string
  email: string
  status: number
  percentage: number
  qtd_associados: number
}
