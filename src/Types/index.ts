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
  Address?: Address
}

export interface PostFranchiseProps {
  email: string
  name: string
  document: string
  company_name: string
  ie?: number
  im?: number
  cep: string
  state: string
  city: string
  street: string
  neighborhood: string
  number: string
  complement: string
  contact1: string
  contact2?: string
  getway_email: string
  getway_token: string
  percentage: number
  password: string
  status: number
}

export interface PutFranchiseProps {
  id?: number
  email?: string
  name?: string
  document?: string
  company_name?: string
  ie?: number
  im?: number
  cep?: string
  state?: string
  city?: string
  street?: string
  neighborhood?: string
  number?: string
  complement?: string
  contact1?: string
  contact2?: string
  getway_email?: string
  getway_token?: string
  percentage?: number
  password?: string
  status?: number
}

export interface Address {
  id?: number
  cep: string
  state: string
  city: string
  street: string
  neighborhood: string
  number: string
  complement: string
}

export interface Associate {
  id?: number
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
  img?: string
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
  isDirect?: boolean
}

export interface HomeAdminProps {
  name: string
  role: string
}
export interface HomeDashAdminProps {
  name: string
  role: string
  page_data: GetHomeAdmin | any
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

export interface GetConsultant {
  id: number
  identification: string
  contact1: string
  status: number
  Franchise?: {
    id: number
    name: string
  }
  qtd_associados: number
}
export interface GetConsultantsNoAuth {
  id: number
  identification: string
}

export interface Consultant {
  id: number
  email: string
  name: string
  identification: string
  document: string
  contact1: string
  contact2?: string
  status: number
  percentage: number
  createdAt: string
  updatedAt: string
  franchise_id: number
  address_id: number
  Address: Address
  Franchise: {
    id: number
    name: string
  }
}

export interface GetOfferAdmin {
  createdAt: string
  id: number
  status: number
  title: string
  value_offer: number
  description?: string
  consumer_cards: number
  quantity: number
  File: {
    url: string
    id: number
    path: string
  }
  Associated: {
    id: number
    fantasy_name: string
    Consultant: {
      id: number
      name: string
      Franchise: {
        id: number
        name: string
      }
    }
  }
}

export interface ShowOfferAdminProps {
  createdAt: string
  id: number
  status: number
  title: string
  value_offer: number
  description?: string
  consumer_cards: number
  quantity: number
  File: {
    url: string
    id: number
    path: string
  }
  Associated: {
    id: number
    fantasy_name: string
    Consultant: {
      id: number
      name: string
      Franchise: {
        id: number
        name: string
      }
    }
  }
}

export interface ShowOfferAssociateProps {
  sell: number
  offer: {
    createdAt: string
    id: number
    status: number
    title: string
    value_offer: number
    description?: string
    consumer_cards: number
    quantity: number
    File: {
      url: string
      id: number
      path: string
    }
    Associated: {
      id: number
      fantasy_name: string
      Consultant: {
        id: number
        name: string
        Franchise: {
          id: number
          name: string
        }
      }
    }
  }
}

export interface GetAssociatesAdmin {
  id: number
  fantasy_name: string
  credit: number
  status: number
  Consultant: {
    id: number
    identification: string
    Franchise: {
      id: number
      name: string
    }
  }
}

export interface GetAssociatesNoAuth {
  id: number
  fantasy_name: string
  img: string
  city: string
  state: string
}

export interface GetAssociatesAuth {
  id: number
  fantasy_name: string
  description: string
  File: {
    url: string
  }
  contact1: string
  Address: Address
  site?: string
  facebook?: string
  instagram?: string
}

export interface PostConsultantProps {
  name: string
  identification: string
  email: string
  company_name: string
  document: string
  contact1: string
  contact2?: string
  password: string
  cep: string
  state: string
  city: string
  street: string
  neighborhood: string
  number: string
  complement?: string
  percentage: number
  franchise_id: number
  status: number
}

export interface PutConsultantProps {
  id: number
  name?: string
  identification?: string
  email?: string
  company_name?: string
  document?: string
  contact1?: string
  contact2?: string
  password?: string
  cep?: string
  state?: string
  city?: string
  street?: string
  neighborhood?: string
  number?: string
  complement?: string
  percentage?: number
  franchise_id?: number
  status?: number
}
export interface PostAssociateProps {
  description: string
  site?: string
  facebook?: string
  instagram?: string
  fantasy_name: string
  company_name: string
  document: string
  representative: string
  contact1: string
  contact2?: string
  email: string
  password: string
  percentage: number
  status: number
  type: number
  cep: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  complement?: string
  reference_point?: string
  credit: number
  file_id: number
  category_id: number
  consultant_id: number
  category_suggestion?: string
}

export interface PutAssociateProps {
  id: number
  description?: string
  site?: string
  facebook?: string
  instagram?: string
  fantasy_name?: string
  company_name?: string
  document?: string
  representative?: string
  contact1?: string
  contact2?: string
  email?: string
  password?: string
  percentage?: number
  status?: number
  type?: number
  cep?: string
  street?: string
  number?: string
  neighborhood?: string
  city?: string
  state?: string
  complement?: string
  reference_point?: string
  credit?: number
  file_id?: number
  category_id?: number
  consultant_id?: number
  category_suggestion?: string
}

export interface CategoriesProps {
  id: number
  name: string
  isvalid: boolean
  createdAt: string
  updatedAt: string
}
export interface GetCategoriesNA {
  id: number
  name: string
}
export interface PostCategoryProps {
  name: string
}
export interface PutCategoryProps {
  id: number
  name: string
  isvalid: boolean
}

export interface GetFileProps {
  id: number
  url: string
  name: string
  path: string
}

export interface ShowAssociateProps {
  id: number
  description: string
  site?: string
  facebook?: string
  instagram?: string
  fantasy_name: string
  company_name: string
  document: string
  representative: string
  contact1: string
  contact2?: string
  email: string
  percentage: number
  credit: number
  status: number
  type: number
  createdAt?: string
  updatedAt?: string
  file_id: number
  category_id: number
  category_suggestion_id: number
  consultant_id: number
  address_id: number
  File: {
    url: string
    id: number
    path: string
  }
  Address: {
    id: number
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    complement?: string
    reference_point?: string
    createdAt?: string
    updatedAt?: string
  }
  Consultant: {
    id: number
    name: string
    identification: string
    Franchise: {
      id: number
      name: string
    }
  }
}

export interface ContactAssociateProps {
  img: string
  associate: string
  description: string
  contact: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  instagram?: string
  site?: string
  facebook?: string
}

export interface PostCatira {
  associate_id?: number
  offer_id: number
  quantity?: number
  value?: number
}

export interface ResponsePostCatira {
  checkout: {
    code: string
    date: string
  }
}

export interface MyOffersProps {
  id: number
  title: string
  value: number
  quantity: number
  status: number
  sell: number
}

export interface PurchaseSalesProps {
  id: number
  type: string
  title: string
  value: string
  quantity: number
  status: number
  date: string
  fat: string
}
export interface MyCatiraProps {
  purchases: PurchaseSalesProps[]
  sales: PurchaseSalesProps[]
}

export interface MyAccountInfoProps {
  img: string
  fantasy_name: string
  category: string
  contact: string
  city: string
  state: string
  street: string
  number: string
  neighborhood: string
  representative_name: string
  email: string
}

export interface PutOffer {
  offer_id: number
  status: number
}

export interface GetCreditsProps {
  credits: number
  spent: number
  pendingSpend: number
  received: number
  receivable: number
}

export interface GetVoucherProps {
  id: number
  code: string
  ctz_value: number
  status: number
  createdAt: string
  updatedAt: string
  offer_id: number
  associate_id: number
  transaction_id: number
  Offer: {
    id: number
    title: string
    description: string
    value_offer: number
    consumer_cards: number
    quantity: number
    status: number
    createdAt: string
    updatedAt: string
    file_id: number
    associate_id: number
    directed_associate_id: null
  }
}

export interface IncreaseProps {
  status?: number
  value: number
  reason: string
  option?: number
  option_id?: number
  Associate?: {
    id: number
    fantasy_name: string
    document: string
    representative: string
    contact1: string
    email: string
    status: number
  }
}

export interface IncreaseUpdateProps {
  id: number
  value?: number
  status?: number
}

export interface AssociateHistoryProps {
  typeDesc: string
  type: number
  description: string
  value: number
  status: number
  date: string
}

export interface PutAssociatePropsAssociate {
  description?: string
  site?: string
  facebook?: string
  instagram?: string
  file_id?: number
  password?: string
  oldPassword?: string
}
export interface GetIncreaseProps {
  id: number
  credits: number
  associate: string
  status: number
  value: number
  reason: string
  createdAt: string
  updatedby?: string
}
