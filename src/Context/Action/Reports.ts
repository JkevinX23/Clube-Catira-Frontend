import { GetAdminReport, Dates } from 'Types'

import api from 'services/api'

export const generateReport = async (data: Dates) =>
  api.post<GetAdminReport>('/report', data)
