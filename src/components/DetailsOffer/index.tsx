import Button from 'components/Button'
import * as S from './styles'
import { Cart as CartIcon } from '@styled-icons/boxicons-regular'
import { PurschaseOffer } from 'Context/Action/Catira'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Link from 'next/link'
import TextField from 'components/TextField'
import { PostCatira } from 'Types'

export type DetailsOfferProps = {
  id: number
  img: string
  offer: string
  value: string
  associate: string
  date: string
  quantity: number
  sell: number
  description: string
}
const DetailsOffer = ({
  img,
  offer,
  value,
  associate,
  date,
  quantity,
  sell,
  description,
  id
}: DetailsOfferProps) => {
  const [qtd, setQtd] = useState(1)
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(0)
  const [estimateValue, setEstimateValue] = useState(0)

  function handleChage(e: any) {
    setQtd(Number(e))
    setStatus(0)
  }
  async function purchase() {
    const payload: PostCatira = {
      offer_id: id,
      quantity: qtd
    }

    if (Number(value) === 0) {
      if (estimateValue === 0) {
        toast.warn(
          'Essa é uma oferta do tipo ORÇAMENTO. Insira o valor desejado para gerar um voucher no valor personalizado.'
        )
        return
      } else {
        payload.value = estimateValue
      }
    }

    try {
      setStatus(1)
      toast.success('Aguarde, estamos processando sua solicitação')
      const { data } = await PurschaseOffer(payload)
      const { checkout } = data
      setCode(checkout.code)
      toast.success(
        'Parabéns, você está apenas um passo de adquirir esta oferta. Acesse o link gerado abaixo e efetue o pagamento.'
      )
      setStatus(2)
    } catch (err) {
      setStatus(0)
      toast.warn('Desculpe, algo de errado ocorreu com sua solicitação')
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Image src={img} role="img" />
        <S.WrapperDetails>
          <S.Title>{offer}</S.Title>
          {Number(value) > 0 ? (
            <S.Value>Ctz {Number(value).toFixed(2)}</S.Value>
          ) : (
            <TextField
              label="Insira um valor"
              type="numeric"
              onChange={(e) => setEstimateValue(Number(e.target.value))}
              step={10}
              value={estimateValue}
            />
          )}

          <p>
            Empresa: <span>{associate}</span>
          </p>
          <p>
            Data Oferta: <span>{date}</span>
          </p>
          {quantity > 0 ? (
            <p>
              Quantidade: <span>{quantity} unidade(s)</span>
            </p>
          ) : (
            <p>
              Quantidade: <span>Ilimitado</span>
            </p>
          )}
          <p>
            Vendidas: <span>{sell | 0} unidade(s)</span>
          </p>
          <S.Description>{description}</S.Description>
        </S.WrapperDetails>
      </S.Content>

      <div>
        Quantidade:
        {quantity > 0 ? (
          <S.InputNumber
            type="number"
            min="1"
            max={quantity - sell}
            defaultValue="1"
            onChange={(e) => handleChage(Number(e.target.value))}
          />
        ) : (
          <S.InputNumber
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => handleChage(Number(e.target.value))}
          />
        )}
        {status === 0 ? (
          <Button background="green" radius="radius100" size="xxsmall">
            <p onClick={() => purchase()}>
              <CartIcon style={{ width: '2rem', height: '2rem' }} />
              Comprar
            </p>
          </Button>
        ) : status === 1 ? (
          <Button background="orange" radius="radius100" size="xxsmall">
            <p>Aguarde...</p>
          </Button>
        ) : (
          <Link
            href={`https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${code}`}
            passHref
          >
            <a target="_blank" rel="noreferrer">
              <Button background="green" radius="radius100" size="xxsmall">
                <p>Ver fatura</p>
              </Button>
            </a>
          </Link>
        )}
      </div>
    </S.Wrapper>
  )
}

export default DetailsOffer
