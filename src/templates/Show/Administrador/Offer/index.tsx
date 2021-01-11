import Button from 'components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { postOffers, showOffer } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import { SyntheticEvent } from 'Types'

type props = {
  id: number
}

const ShowOffer = ({ id }: props) => {
  const [file, setFile] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >('/img/preview-clube.png')
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [file_id, setFileId] = useState(1)
  const [associate, setAssociate] = useState('')

  function handleIlimited() {
    setIlimited(true)
  }
  function handleLimited() {
    setIlimited(false)
  }

  async function handleOffer() {
    const data = {
      title,
      description,
      value_offer,
      consumer_cards,
      quantity,
      file_id
    }

    try {
      await postOffers(data)
      toast.success('oferta criada com sucesso!')
    } catch (e) {
      toast.error('Erro ao criar oferta')
      console.log(e)
    }
  }

  function handleImageChange(e: SyntheticEvent) {
    e.preventDefault()
    if (window.FileReader) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        const file = e.target.files[0]

        reader.onloadend = () => {
          setFile(file)
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  useEffect(() => {
    async function loadOffer() {
      const { data } = await showOffer(id)
      setTitle(data.title)
      setValueOffer(data.value_offer)
      setDescription(data.description || '')
      setConsumerCards(data.consumer_cards)
      setQuantity(data.quantity)
      setAssociate(data.Associated.fantasy_name)
      setFile(data.File.url)
    }
    loadOffer()
  }, [id])

  return (
    <S.Wrapper>
      <S.WrapperField>
        <input
          type="file"
          accept="image/*"
          onChange={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            (e) => handleImageChange(e)
          }
        />
        {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: Unreachable code error */}
        <S.Image src={imagePreviewUrl} />
        <br />
        <S.Label>Título da Oferta</S.Label>
        <S.Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <S.Label>Descrição</S.Label>
        <S.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
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

        <S.Label>Vai para uma empresa específica</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel>
            <S.InputRadio type="radio" id="sim" name="direct" value="sim" />
            Sim
          </S.RadioLabel>

          <S.RadioLabel>
            <S.InputRadio
              type="radio"
              id="nao"
              name="direct"
              value="nao"
              defaultChecked
            />
            Não
          </S.RadioLabel>
        </S.WrapperRadio>

        <S.Label>Valor</S.Label>
        <S.Input
          min="0"
          type="number"
          onChange={(e) => setValueOffer(Number(e.target.value))}
          value={value_offer.toFixed(2)}
          step="0.1"
        />

        <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
        <S.Input
          min="1"
          type="number"
          defaultValue="1"
          value={consumer_cards}
          onChange={(e) => setConsumerCards(Number(e.target.value))}
        />

        <S.Label>Quantidade Disponível</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel onClick={handleLimited}>
            <S.InputRadio
              type="radio"
              id="limitada"
              name="limit"
              value="limitada"
            />
            Limitada
          </S.RadioLabel>

          <S.RadioLabel onClick={handleIlimited}>
            <S.InputRadio
              type="radio"
              id="ilimitada"
              name="limit"
              value="ilimitada"
              defaultChecked
            />
            Ilimitada
          </S.RadioLabel>
        </S.WrapperRadio>

        {!isIlimmited && (
          <>
            <S.Label>Insira a quantidade</S.Label>
            <S.Input
              min="1"
              type="number"
              defaultValue="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </>
        )}

        <S.WrapperButton>
          <Button
            background="black"
            size="xxsmall"
            radius="radius100"
            onClick={handleOffer}
          >
            Atualizar Oferta
          </Button>
        </S.WrapperButton>
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default ShowOffer
