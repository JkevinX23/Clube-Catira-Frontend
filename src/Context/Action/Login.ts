import { Login, LoginResponse } from 'Types'

import api from 'services/api'

export const postLogin = async (data: Login) =>
  api.post<LoginResponse>('/session', data)
