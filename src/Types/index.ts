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
}
