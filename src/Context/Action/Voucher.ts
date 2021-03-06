import api from 'services/api'
import { GetVoucherProps, ShowVoucherProps, PDVProps } from 'Types'
export const getVoucherByTransaction = async (id: number) =>
  api.post<GetVoucherProps[]>('/voucher/transaction', { transaction_id: id })
export const showVoucher = async (id: number) =>
  api.get<ShowVoucherProps>(`/voucher/show?id=${id}`)
export const validateVoucher = async (code: string) =>
  api.post<PDVProps>('/pdv', { code })
