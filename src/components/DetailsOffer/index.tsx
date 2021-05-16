import Button from 'components/Button'
import * as S from './styles'
import { Cart as CartIcon } from '@styled-icons/boxicons-regular'
import { PurschaseOffer } from 'Context/Action/Catira'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { PostCatira } from 'Types'
import { useRouter } from 'next/router'
import NumberFormat from 'react-number-format'
import { FormatCurrency } from 'utils/Masks'
import { putOptionOffer } from 'Context/Action/Offer'

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
  consumer_cards: number
  isDirect?: boolean
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
  id,
  consumer_cards,
  isDirect
}: DetailsOfferProps) => {
  const [qtd, setQtd] = useState(1)
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(0)
  const [valueFormated, setValueFormated] = useState('0,00')
  const [estimateValue, setEstimateValue] = useState(0)
  const route = useRouter()

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
      setStatus(2)
      route.push(
        `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${checkout.code}`
      )
    } catch (error) {
      setStatus(0)
      if (error.response) {
        switch (error.response.status) {
          case 404:
            toast.error('[Code: 404] Dados incorretos')
            break
          case 402:
            toast.error(
              'Créditos insuficientes. Faça sua solicitação de aumento de limite de crédito.'
            )
            break
          case 403:
            toast.error(
              'Oferta não válida para este usuario. Tente sair e realizar um novo login no sistema.'
            )
            break
          case 406:
            toast.warn(
              'A quantidade informada está acima da disponibilidade dessa oferta.'
            )
            break
          case 408:
            toast.error(
              'Ocorreu um erro ao processar sua transação. Tente novamente.'
            )
            break
          default:
            toast.warn('Desculpe, algo de errado ocorreu com sua solicitação')
        }
      }
    }
  }

  function mascaraMoeda(value: string) {
    const onlyDigits = value
      .split('')
      .filter((s: any) => /\d/.test(s))
      .join('')
      .padStart(2, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    if (Number(digitsFloat) >= 9999999) return
    setValueFormated(FormatCurrency(Number(digitsFloat)))
    setEstimateValue(Number(digitsFloat))
  }

  async function HandleRecusar() {
    if (window.confirm('Deseja mesmo recusar esta oferta? ')) {
      try {
        await putOptionOffer({ offer_id: id, status: 2 })
        toast.warn('Oferta recusada!')
        setTimeout(() => {
          route.back()
        }, 1000)
      } catch (err) {
        console.log(err)
        toast.error('Erro 504!')
      }
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
            <div>
              <p>Insira o valor negociado abaixo </p>
              <S.InputDiv>
                <S.Input
                  onChange={(e) => mascaraMoeda(e.target.value)}
                  value={valueFormated}
                />
              </S.InputDiv>
            </div>
          )}
          <p>
            Empresa: <span>{associate}</span>
          </p>
          <p>
            Data Oferta: <span>{date}</span>
          </p>
          {consumer_cards > 1 && (
            <p>
              Cartões de consumo: <span>{consumer_cards}</span>
            </p>
          )}
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
          <S.Description value={description} readOnly />
        </S.WrapperDetails>
      </S.Content>

      <S.DivWB>
        Quantidade:
        {quantity > 0 ? (
          <S.InputNumber
            type="number"
            min="1"
            max={quantity - sell}
            defaultValue="1"
            value={qtd}
            onChange={(e) =>
              Number(e.target.value) <= quantity - sell &&
              handleChage(Number(e.target.value))
            }
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
        ) : (
          status === 1 && (
            <Button background="orange" radius="radius100" size="xxsmall">
              <p>Aguarde...</p>
            </Button>
          )
        )}
        {isDirect && (
          <Button
            background="red"
            radius="radius100"
            size="xxsmall"
            onClick={() => HandleRecusar()}
          >
            <p>Resusar Oferta</p>
          </Button>
        )}
      </S.DivWB>
    </S.Wrapper>
  )
}

export default DetailsOffer
