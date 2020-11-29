import Button from 'components/Button'
import * as S from './styles'
import { Cart as CartIcon } from '@styled-icons/boxicons-regular'

export type DetailsOfferProps = {
  img: string
  offer: string
  value: string

  associate: string
  date: string
  quantity: any
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
  description
}: DetailsOfferProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Image src={img} role="img" aria-label={name} />
      <S.WrapperDetails>
        <S.Title>{offer}</S.Title>
        <S.Value>{value}</S.Value>
        <p>
          Empresa: <span>{associate}</span>
        </p>
        <p>
          Data Oferta: <span>{date}</span>
        </p>
        <p>
          Quantidade: <span>{quantity}</span>
        </p>
        <p>
          Vendidas: <span>{sell} unidade(s)</span>
        </p>
        <S.Description>{description}</S.Description>
      </S.WrapperDetails>
    </S.Content>

    <div>
      Quantidade:
      <S.InputNumber
        type="number"
        min="1"
        max={quantity - sell}
        defaultValue="1"
      />
      <Button background="green" radius="radius100" size="xxsmall">
        <p>
          <CartIcon style={{ width: '2rem', height: '2rem' }} />
          Comprar
        </p>
      </Button>
    </div>
  </S.Wrapper>
)

export default DetailsOffer
