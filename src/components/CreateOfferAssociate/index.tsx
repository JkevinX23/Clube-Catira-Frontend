import Button from 'components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { postOffers } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import { getAssociates } from 'Context/Action/Associates'
import { cleanObject } from 'utils/Validation'
import ImageInput from 'components/ImageInput'
import { GetAssociatesAdmin } from 'Types'
import NumberFormat from 'react-number-format'
import Select from 'react-select'

const CreateOfferAssociate = () => {
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [isDirect, setIsDirect] = useState(false)
  const [associates, setAssociates] = useState<any>([])
  const [direct, setDirectID] = useState<any>(null)
  const [options, setOptions] = useState<any>(null)

  const [file, setFile] = useState(1)

  function handleIlimited() {
    if (!isDirect) {
      setIlimited(true)
    }
  }
  function handleLimited() {
    setIlimited(false)
  }

  function handleNotDirect() {
    setIsDirect(false)
    setDirectID(null)
  }
  function handleDirect() {
    setIsDirect(true)
    setIlimited(false)
  }

  async function handleOffer() {
    const data = {
      title,
      description,
      value_offer: value_offer | 0,
      consumer_cards,
      quantity: !isIlimmited ? quantity : 0,
      file_id: file,
      directed_id: direct
    }

    try {
      await postOffers(cleanObject(data))
      toast.success('oferta criada com sucesso!')
      cleanForm()
    } catch (e) {
      toast.error('Erro ao criar oferta')
      console.log(e)
    }
  }

  function compare(a: GetAssociatesAdmin, b: GetAssociatesAdmin) {
    if (a.fantasy_name.toLowerCase() < b.fantasy_name.toLowerCase()) return -1
    if (a.fantasy_name.toLowerCase() > b.fantasy_name.toLowerCase()) return 1
    return 0
  }

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await getAssociates()
      const opt = data
        .sort(compare)
        .map((e) => ({ value: e.id, label: `${e.fantasy_name} - ${e.id}` }))
      setAssociates(data.sort(compare))
      setOptions(opt)
    }
    loadAssociates()
  }, [])

  function cleanForm() {
    setTimeout(() => window.location.reload(), 1500)
  }

  return (
    <S.Wrapper>
      <S.WrapperField>
        <h4> CADASTRAR OFERTA </h4>
        <S.AlignCenter>
          <ImageInput cat={{ setFile }} />
        </S.AlignCenter>

        <S.Label>Título da Oferta</S.Label>
        <S.Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <S.Label>Descrição</S.Label>
        <S.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </S.WrapperField>

      <S.WrapperField>
        <S.Label>Vai para uma empresa específica</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel onClick={() => handleDirect()}>
            <S.InputRadio type="radio" id="sim" name="direct" value="sim" />
            Sim
          </S.RadioLabel>

          <S.RadioLabel onClick={() => handleNotDirect()}>
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

        {isDirect && (
          <S.SelectWrapper>
            <S.Label>Associado</S.Label>
            <Select
              isClearable
              className="react-select-container"
              placeholder="Selecione"
              options={options}
              onChange={(e) => setDirectID(e?.value)}
            />
          </S.SelectWrapper>
        )}

        <S.Label>Insira o valor</S.Label>
        <NumberFormat
          thousandSeparator={'.'}
          customInput={S.Input}
          decimalScale={2}
          fixedDecimalScale
          decimalSeparator={','}
          onValueChange={(e) => setValueOffer(Number(e.value) | 0)}
        />

        <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
        <S.Input
          min="1"
          type="number"
          defaultValue="1"
          onChange={(e) => setConsumerCards(Number(e.target.value))}
          value={consumer_cards}
        />

        <S.Label>Quantidade Disponível</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel onClick={handleLimited}>
            <S.InputRadio
              type="radio"
              id="limitada"
              name="limit"
              value="limitada"
              checked={!isIlimmited}
            />
            Limitada
          </S.RadioLabel>

          <S.RadioLabel onClick={handleIlimited}>
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
            background="white"
            size="xxsmall"
            radius="radius100"
            onClick={cleanForm}
          >
            Limpar
          </Button>
          <Button
            background="black"
            size="xxsmall"
            radius="radius100"
            onClick={handleOffer}
          >
            Criar Oferta
          </Button>
        </S.WrapperButton>
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default CreateOfferAssociate
