import Button from 'components/Button'
import * as S from './styles'
import { Cart as CartIcon } from '@styled-icons/boxicons-regular'
import { PurschaseOffer } from 'Context/Action/Catira'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Link from 'next/link'
import TextField from 'components/TextField'
import { PostCatira } from 'Types'
import { useRouter } from 'next/router'

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
  consumer_cards
}: DetailsOfferProps) => {
  const [qtd, setQtd] = useState(1)
  const [code, setCode] = useState('')
  const [status, setStatus] = useState(0)
  const [estimateValue, setEstimateValue] = useState(0)
  const route = useRouter()

  function handleChage(e: any) {
    setQtd(Number(e))
    setStatus(0)
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
              step={10}
              value={estimateValue}
              disabled
            />
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
            disabled
          />
        ) : (
          <S.InputNumber type="number" min="1" defaultValue="1" disabled />
        )}
        <S.WrapperButton>
          <Button background="green" radius="radius100" size="xxsmall" disabled>
            <p>
              <CartIcon style={{ width: '2rem', height: '2rem' }} />
              Comprar
            </p>
          </Button>
          <Button
            background="black"
            radius="radius100"
            size="xxsmall"
            onClick={() => route.back()}
          >
            {' '}
            <p>Voltar</p>
          </Button>
        </S.WrapperButton>
      </S.DivWB>
    </S.Wrapper>
  )
}

export default DetailsOffer
