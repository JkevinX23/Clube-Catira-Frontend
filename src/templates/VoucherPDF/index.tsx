/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Logo from 'components/Logo'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import { showVoucher } from 'Context/Action/Voucher'
import { FormatDateByFNS, cpfCnpjMask, cellphoneeMask } from 'utils/Masks'
export default function VoucherPDF() {
  const router = useRouter()
  const [voucher, setVoucher] = useState<any>(null)

  useEffect(() => {
    async function loadVoucher() {
      try {
        const { id } = router.query
        if (id) {
          const { data } = await showVoucher(Number(id)!)
          setVoucher(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    loadVoucher()
  }, [router])

  return (
    voucher !== null && (
      <S.Wrapper>
        <S.Button>
          <button onClick={() => window.print()}>Imprimir</button>
        </S.Button>
        <S.Header>
          <S.Logo>
            <Logo />
          </S.Logo>
          <S.Title>
            <h2>Cupom</h2>
            <h4>{voucher.code}</h4>
          </S.Title>
        </S.Header>
        <S.Content>
          <S.Image>
            <img src={voucher.Offer.File.url} />
          </S.Image>
          <S.Session>
            <h3>{voucher.Offer.title}</h3>
            <h1>Ct$ {voucher.ctz_value}</h1>
            <p>Voucher gerado em: {FormatDateByFNS(voucher.createdAt)}</p>
          </S.Session>
        </S.Content>
        <S.Description>
          <p>{voucher.Offer.description}</p>
        </S.Description>
        <S.Associates>
          <S.Salesman>
            <h4>Vendedor</h4>
            <p>
              <b>{voucher.Offer.Associated.fantasy_name}</b>
            </p>
            <p>CNPJ: {cpfCnpjMask(voucher.Offer.Associated.document)}</p>
            <p>
              Endereço: {voucher.Offer.Associated.Address.street},{' '}
              {voucher.Offer.Associated.Address.number}
            </p>
            <p>
              {voucher.Offer.Associated.Address.neigborhood}{' '}
              {voucher.Offer.Associated.Address.cep} -{' '}
              {voucher.Offer.Associated.Address.city}/
              {voucher.Offer.Associated.Address.state}
            </p>
            <p>Telefone: {cellphoneeMask(voucher.Offer.Associated.contact1)}</p>
            <p>Email: {voucher.Offer.Associated.email}</p>
          </S.Salesman>
          <S.Buyer>
            <h4>Comprador</h4>
            <p>
              <b>{voucher.Associate.fantasy_name}</b>
            </p>
            <p>CNPJ: {cpfCnpjMask(voucher.Associate.document)}</p>
            <p>
              Endereço: {voucher.Associate.Address.street},{' '}
              {voucher.Associate.Address.number}
            </p>
            <p>
              {voucher.Associate.Address.neigborhood}{' '}
              {voucher.Associate.Address.cep} - {voucher.Associate.Address.city}
              /{voucher.Associate.Address.state}
            </p>
            <p>Telefone: {cellphoneeMask(voucher.Associate.contact1)}</p>
            <p>Email: {voucher.Associate.email}</p>
          </S.Buyer>
        </S.Associates>
        <S.Footer>
          <p>
            <b>Recibo</b>
          </p>
          <p>
            Catirei 1 unidade(s) de voucher de compra em{' '}
            {voucher.Associate.fantasy_name} no valor de Ct$ {voucher.ctz_value}
          </p>

          <S.Data>
            <span>Montes Claros, ________/________/________</span>
            <S.Signature>
              <span>_____________________________________________</span>
              <span>Comprador</span>
            </S.Signature>
          </S.Data>
        </S.Footer>
      </S.Wrapper>
    )
  )
}
