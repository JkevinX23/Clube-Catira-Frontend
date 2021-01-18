import Button from 'components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { putOptionOffer, showOffer } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
// import { SyntheticEvent } from 'Types'

type props = {
  id: number
}

const ShowOffer = ({ id }: props) => {
  // const [file, setFile] = useState('')
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

  async function handleOffer(status: number) {
    try {
      await putOptionOffer({ offer_id: id, status })
      toast.success(
        `oferta ${status === 1 ? 'aprovada' : 'suspensa'} com sucesso!`
      )
    } catch (e) {
      toast.error('Erro ao criar oferta')
      console.log(e)
    }
  }

  // function handleImageChange(e: SyntheticEvent) {
  //   e.preventDefault()
  //   if (window.FileReader) {
  //     if (e.target.files[0]) {
  //       const reader = new FileReader()
  //       const file = e.target.files[0]

  //       reader.onloadend = () => {
  //         setFile(file)
  //         setImagePreviewUrl(reader.result)
  //       }
  //       reader.readAsDataURL(file)
  //     }
  //   }
  // }

  useEffect(() => {
    async function loadOffer() {
      const { data } = await showOffer(id)
      console.log(data)
      setTitle(data.title)
      setValueOffer(data.value_offer)
      setDescription(data.description || '')
      setConsumerCards(data.consumer_cards)
      setAssociate(data.Associated.fantasy_name)
      setImagePreviewUrl(data.File.url)
      setIlimited(data.quantity === 0)
      setQuantity(data.quantity)
      setStatus(
        data.status === 0
          ? 'PENDENTE'
          : data.status === 1
          ? 'ATIVA'
          : 'SUSPENSA'
      )
    }
    loadOffer()
  }, [id])

  return (
    <S.Wrapper>
      <S.WrapperField>
        <h5>STATUS: {status} </h5>

        {/* <input
          type="file"
          accept="image/*"
          onChange={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            (e) => handleImageChange(e)
          }
        />
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
            <S.Label>Insira a quantidade</S.Label>
            <S.Input
              disabled
              min="1"
              type="number"
              defaultValue="1"
              value={quantity}
            />
          </>
        )}

        <S.WrapperButton>
          <Button
            background="green"
            size="xxsmall"
            radius="radius100"
            onClick={() => handleOffer(1)}
          >
            Aprovar
          </Button>
          <Button
            background="white"
            size="xxsmall"
            radius="radius100"
            onClick={() => handleOffer(2)}
          >
            Suspender
          </Button>
        </S.WrapperButton>
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default ShowOffer
