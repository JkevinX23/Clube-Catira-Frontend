/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from 'components/Button'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { postOffers } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import { getAssociates } from 'Context/Action/Associates'
import { cleanObject } from 'utils/Validation'
import ImageInput from 'components/ImageInput'
import { GetAssociatesAdmin } from 'Types'
import Select from 'react-select'
import { FormatCurrency } from 'utils/Masks'

const CreateOfferAssociate = () => {
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0.0)
  const [valueFormated, setValueFormated] = useState('0,00')
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [isDirect, setIsDirect] = useState(false)
  const [direct, setDirectID] = useState<any>(null)
  const [associates, setAssociates] = useState<any>([])
  const [options, setOptions] = useState<any>(null)

  //////CLIENT.IMAGE_ID
  const [file, setFile] = useState<number>(0)

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
    const data = isDirect
      ? {
          title,
          description,
          value_offer: value_offer || 0.0,
          consumer_cards: 1,
          quantity: 1,
          file_id: file,
          directed_id: direct
        }
      : {
          title,
          description,
          value_offer: value_offer || 0.0,
          consumer_cards,
          quantity: !isIlimmited ? quantity : 0,
          file_id: file
        }

    try {
      const payload = cleanObject(data)
      await postOffers(payload)
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

  function mascaraMoeda(value: string) {
    const onlyDigits = value
      .split('')
      .filter((s: any) => /\d/.test(s))
      .join('')
      .padStart(2, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    if (Number(digitsFloat) >= 9999999) return
    setValueFormated(FormatCurrency(Number(digitsFloat)))
    setValueOffer(Number(digitsFloat))
  }

  return (
    <S.Wrapper>
      <S.WrapperField>
        <h4> CADASTRAR OFERTA </h4>
        <S.AlignCenter>
          <ImageInput cat={{ setFile }} />
        </S.AlignCenter>

        <S.Label>Título da Oferta</S.Label>
        <S.Input
          value={title}
          onChange={(e) =>
            e.target.value.length < 40 && setTitle(e.target.value)
          }
        />

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
        <S.InputDiv>
          <S.Input
            onChange={(e) => mascaraMoeda(e.target.value)}
            value={valueFormated}
          />
        </S.InputDiv>
        {!isDirect && (
          <>
            <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
            <S.Input
              min="1"
              type="number"
              defaultValue={1}
              onChange={(e) => setConsumerCards(Number(e.target.value))}
              value={consumer_cards}
            />
          </>
        )}
        {!isDirect && (
          <>
            <S.Label>Quantidade Disponível</S.Label>
            <S.WrapperRadio>
              <S.RadioLabel onClick={handleLimited}>
                <S.InputRadio
                  type="radio"
                  id="limitada"
                  name="limit"
                  value="limitada"
                  defaultChecked={!isIlimmited}
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
