import Select from 'react-select'
import { GetAssociatesAdmin, GetAssociatesNoAuth } from 'Types'

import Button from 'components/Button'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { postOffers } from 'Context/Action/Offer'
import { getAssociates, GetAssociatesNA } from 'Context/Action/Associates'
import { toast } from 'react-toastify'
import { cleanObject } from 'utils/Validation'
import ImageInput from 'components/ImageInput'
import { FormatCurrency } from 'utils/Masks'

const CreateOfferFranchise = () => {
  const [file, setFile] = useState(0)
  const [valueFormated, setValueFormated] = useState('0,00')
  const [associates, setAssociates] = useState<any>([])
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [isDirect, setIsDirect] = useState(false)
  const [associateId, setAssociateId] = useState<any>(0)
  const [direct, setDirectID] = useState<any>(null)
  const [allAssociates, setAllAss] = useState<any>([])

  function handleIlimited() {
    setIlimited(true)
  }
  function handleLimited() {
    setIlimited(false)
  }
  function handleChange() {
    setIsDirect(false)
    setDirectID(null)
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
          directed_id: direct,
          associate_id: associateId
        }
      : {
          title,
          description,
          value_offer: value_offer || 0.0,
          consumer_cards,
          quantity: !isIlimmited ? quantity : 0,
          associate_id: associateId,
          file_id: file
        }

    try {
      await postOffers(cleanObject(data))
      toast.success('oferta criada com sucesso!')
    } catch (e) {
      toast.error('Erro ao criar oferta')
      console.log(e)
    }
  }

  function compare(
    a: GetAssociatesAdmin | GetAssociatesNoAuth,
    b: GetAssociatesAdmin | GetAssociatesNoAuth
  ) {
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
      setAssociates(opt)
    }

    async function loadAllAssociates() {
      try {
        const { data } = await GetAssociatesNA()
        const opt = data
          .sort(compare)
          .map((e) => ({ value: e.id, label: `${e.fantasy_name} - ${e.id}` }))
        setAllAss(opt)
      } catch (err) {
        console.log(err)
        toast.error('Erro ao carregar todos os associados.')
      }
    }
    loadAssociates()
    loadAllAssociates()
  }, [])

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
        <S.Input onChange={(e) => setTitle(e.target.value)} />

        <S.Label>Descrição</S.Label>
        <S.TextArea onChange={(e) => setDescription(e.target.value)} />
      </S.WrapperField>

      <S.WrapperField>
        <S.SelectWrapper>
          <S.Label>Associado</S.Label>
          <Select
            isClearable
            className="react-select-container"
            placeholder="Selecione"
            options={associates}
            onChange={(e) => setAssociateId(e?.value)}
          />
        </S.SelectWrapper>

        <S.Label>Vai para uma empresa específica</S.Label>
        <S.WrapperRadio>
          <S.RadioLabel onClick={() => setIsDirect(true)}>
            <S.InputRadio type="radio" id="sim" name="direct" value="sim" />
            Sim
          </S.RadioLabel>

          <S.RadioLabel onClick={() => handleChange()}>
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
              options={allAssociates}
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

        <S.Label>Dividir em quantos &#34;Cartões de Consumo&#34;</S.Label>
        <S.Input
          min="1"
          type="number"
          defaultValue="1"
          onChange={(e) => setConsumerCards(Number(e.target.value))}
        />
        {!isDirect && (
          <div>
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
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </>
            )}
          </div>
        )}
        <S.WrapperButton>
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

export default CreateOfferFranchise
