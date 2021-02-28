import Button from 'components/Button'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { postOffers } from 'Context/Action/Offer'
import { getAssociates } from 'Context/Action/Associates'
import { toast } from 'react-toastify'
import { cleanObject } from 'utils/Validation'
import ImageInput from 'components/ImageInput'

const CreateOfferFranchise = () => {
  const [file, setFile] = useState(1)

  const [associates, setAssociates] = useState<any>([])
  const [isIlimmited, setIlimited] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value_offer, setValueOffer] = useState(0)
  const [consumer_cards, setConsumerCards] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [isDirect, setIsDirect] = useState(false)
  const [associateId, setAssociateId] = useState(0)
  const [direct, setDirectID] = useState<any>(null)

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
    const data = {
      title,
      description,
      value_offer: value_offer | 0,
      consumer_cards,
      quantity: !isIlimmited ? quantity : 0,
      file_id: file,
      associate_id: associateId
    }

    try {
      await postOffers(cleanObject(data))
      toast.success('oferta criada com sucesso!')
    } catch (e) {
      toast.error('Erro ao criar oferta')
      console.log(e)
    }
  }

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await getAssociates()
      setAssociates(data)
    }
    loadAssociates()
  }, [])

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
          <S.Select onChange={(e) => setAssociateId(Number(e.target.value))}>
            <option value={0} selected disabled hidden>
              Selecione
            </option>
            {associates &&
              associates.map((ass: any) => (
                <option key={ass.id} value={ass.id}>
                  {ass.id} - {ass.fantasy_name}
                </option>
              ))}
          </S.Select>
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
            <S.Select onChange={(e) => setDirectID(e.target.value)}>
              <option value="none" selected disabled hidden>
                Selecione
              </option>
              {associates &&
                associates.map((ass: any) => (
                  <option key={ass.id} value={ass.id}>
                    {ass.id} - {ass.fantasy_name}
                  </option>
                ))}
            </S.Select>
          </S.SelectWrapper>
        )}

        <S.Label>Insira o valor</S.Label>
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
            Criar Oferta
          </Button>
        </S.WrapperButton>
      </S.WrapperField>
    </S.Wrapper>
  )
}

export default CreateOfferFranchise
