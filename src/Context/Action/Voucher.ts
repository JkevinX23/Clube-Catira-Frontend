import api from 'services/api'
import { GetVoucherProps } from 'Types'
export const getVoucherByTransaction = async (id: number) =>
  api.post<GetVoucherProps[]>('/voucher/transaction', { transaction_id: id })
