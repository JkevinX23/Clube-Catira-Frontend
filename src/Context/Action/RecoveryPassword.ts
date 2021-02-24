import api from 'services/api'

export const recoveryAccount = async (email: string) =>
  api.post('/forget', { email })
