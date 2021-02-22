import * as S from './styles'
import { useEffect, useState } from 'react'
import { putOptionOffer, showOffer } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import { ShowOfferAdminProps } from 'Types'

type props = {
  id: number
}

const ShowOffer = ({ id }: props) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >('/img/preview-clube.png')
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [status, setStatus] = useState('')
  const [associate, setAssociate] = useState('')
  const [direct, setDirect] = useState<any>(null)

  useEffect(() => {
    async function loadOffer() {
      const { data } = await showOffer(id)
      setTitle((data as ShowOfferAdminProps).title)
      setValueOffer((data as ShowOfferAdminProps).value_offer)
      setDescription((data as ShowOfferAdminProps).description || '')
      setConsumerCards((data as ShowOfferAdminProps).consumer_cards)
      setAssociate((data as ShowOfferAdminProps).Associated.fantasy_name)
      setImagePreviewUrl((data as ShowOfferAdminProps).File.url)
      setIlimited((data as ShowOfferAdminProps).quantity === 0)
      setQuantity((data as ShowOfferAdminProps).quantity)
      setStatus(
        (data as ShowOfferAdminProps).status === 0
          ? 'PENDENTE'
          : (data as ShowOfferAdminProps).status === 1
          ? 'ATIVA'
          : 'SUSPENSA'
      )
      setDirect((data as ShowOfferAdminProps).Directed)
    }
    loadOffer()
  }, [id])

  return (
    <S.Wrapper>
      <S.WrapperField>
        {!!direct && direct ? (
          <div>
            <h5>OFERTA DIRECIONADA</h5>
            <h5>PARA: {direct.fantasy_name}</h5>
          </div>
        ) : (
          <h5>STATUS: {status} </h5>
        )}

        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error } }*/}
        <S.Image src={imagePreviewUrl} />
        <br />
        <S.Label>Título da Oferta</S.Label>
        <S.Input disabled value={title} />

        <S.Label>Descrição</S.Label>
        <S.TextArea disabled value={description} />
      </S.WrapperField>

      <S.WrapperField>
        <S.SelectWrapper>
          <S.Label>Associado</S.Label>
          <S.Select disabled>
            <option value="none" selected disabled hidden>
              {associate}
            </option>
          </S.Select>
        </S.SelectWrapper>

        <S.Label>Valor</S.Label>
        <S.Input
          disabled
          min="0"
          type="number"
          onChange={(e) => setValueOffer(Number(e.target.value))}
          value={value_offer.toFixed(2)}
          step="0.1"
        />

        <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
        <S.Input
          disabled
          min="1"
          type="number"
          defaultValue="1"
          value={consumer_cards}
        />

        <S.Label>Quantidade Disponível</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel>
            <S.InputRadio
              type="radio"
              id="limitada"
              name="limit"
              value="limitada"
              checked={!isIlimmited}
            />
            Limitada
          </S.RadioLabel>

          <S.RadioLabel>
            <S.InputRadio
              type="radio"
              id="ilimitada"
              name="limit"
              value="ilimitada"
              checked={isIlimmited}
            />
            Ilimitada
          </S.RadioLabel>
        </S.WrapperRadio>

        {!isIlimmited && (
          <>
            <S.Label>Quantidade</S.Label>
            <S.Input
              disabled
              min="1"
              type="number"
              defaultValue="1"
              value={quantity}
            />
          </>
        )}
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default ShowOffer
