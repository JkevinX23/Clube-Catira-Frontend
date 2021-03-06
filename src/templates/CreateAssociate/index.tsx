import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { SyntheticEvent } from 'Types'
import * as S from './styles'
import searchCep from 'cep-promise'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'
import { toast } from 'react-toastify'
import { getCategoriesAdmin } from 'Context/Action/Category'
import { getConsultants } from 'Context/Action/Consultant'
import { postFile } from 'Context/Action/File'
import { createAssociateAdmin } from 'Context/Action/Associates'

const CreateAssociate = () => {
  const [categories, setCategories] = useState<any>([])
  const [consultants, setConsultants] = useState<any>([])
  const [file, setFile] = useState<any>()
  const [hidden, setHidden] = useState(false)
  const [description, setDescription] = useState('')
  const [site, setSite] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [category_id, setCategory_id] = useState(0)
  const [company_name, setCompanyName] = useState('')
  const [fantasy_name, setFantasy_name] = useState('')
  const [document, setDocument] = useState('')
  const [response_name, setResponseName] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')
  const [state, setState] = useState('none')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [contact1, setContact1] = useState('')
  const [contact2, setContact2] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [percentage, setPercentage] = useState(10)
  const [credit, setCredit] = useState('')
  const [status, setStatus] = useState(1)
  const [type, setType] = useState(1)
  const [consultant_id, setconsultant_id] = useState(0)
  const [file_id, setFile_id] = useState(0)
  const [catz_fee, setCatz_fee] = useState(0)

  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >('/img/preview-clube.webp')

  function handleImageChange(e: SyntheticEvent) {
    e.preventDefault()
    if (window.FileReader) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        const file = e.target.files[0]
        const data = new FormData()
        data.append('file', e.target.files[0])
        setFile(data)
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  function refreshPage() {
    window.location.reload()
  }

  useEffect(() => {
    if (document) {
      setDocument(cpfCnpjMask(document))
    }
  }, [document])

  useEffect(() => {
    if (contact1) {
      setContact1(cellphoneeMask(contact1))
    }
  }, [contact1])

  useEffect(() => {
    if (contact2) {
      setContact2(cellphoneeMask(contact2))
    }
  }, [contact2])

  useEffect(() => {
    if (cep) {
      setCep(cepMask(cep))
      if (cep.length === 9) {
        searchCep(cep.replace(/\D/g, '')).then(setValuesCep).catch(errorCep)
      }
    }

    function errorCep() {
      toast.warn('CEP não encontrado!')
    }
    function setValuesCep(data: searchCep.CEP) {
      console.log(data)
      setState(data.state)
      setCity(data.city)
      setNeighborhood(data.neighborhood)
      setStreet(data.street)
    }
  }, [cep])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await getCategoriesAdmin()
      if (!data) {
        toast.warn('Nenhuma categoria ativa. ')
      }
      setCategories(data)
    }

    async function loadConsultants() {
      const { data } = await getConsultants()
      setConsultants(
        data.filter((a) => a.status === 1).sort((a, b) => b.id - a.id)
      )
    }

    loadCategories()
    loadConsultants()
  }, [])

  async function handlesubmit() {
    if (!isEmail(email)) {
      toast.error('Email Invalido')
      return
    }
    if (!description) {
      toast.error('A Descrição é obrigatória.')
      return
    }

    if (!fantasy_name) {
      toast.error('Nome fantasia é obrigatório.')
      return
    }
    if (!document) {
      toast.error('Documento obrigatório, seja CPF ou CNPJ.')
      return
    }
    if (!response_name) {
      toast.error('Informe o nome do representante.')
      return
    }
    if (!contact1) {
      toast.error('Informe ao menos um número para contato.')
      return
    }

    if (!cep) {
      toast.error('Endereço obrigatório: Informe o CEP.')
      return
    }

    if (!street) {
      toast.error('Endereço obrigatório: Informe a rua.')
      return
    }

    if (!number) {
      toast.error('Endereço obrigatório: Informe o núemro.')
      return
    }

    if (!neighborhood) {
      toast.error('Endereço obrigatório: Informe o bairro.')
      return
    }

    if (!city) {
      toast.error('Endereço obrigatório: Informe sua cidade.')
      return
    }

    if (!state) {
      toast.error('Endereço obrigatório: Informe seu estado.')
      return
    }

    if (!credit) {
      toast.error('Informe quanto deseja de crédito inicial. ')
      return
    }
    if (!category_id) {
      toast.error('Informe uma categoria.')
      return
    }

    if (!consultant_id) {
      toast.error('Informe um consultor.')
      return
    }
    if (password !== passwordConfirm) {
      toast.warn('As senhas não coorespondem.')
      return
    }
    if (document.length === 14) {
      if (!validarCPF(document)) {
        toast.warn('CPF inválido')
        return
      }
    } else {
      if (!validarCNPJ(document)) {
        toast.warn('CNPJ inválido')
        return
      }
    }

    if (password.length < 6) {
      toast.info('Sua senha deve ter pelo menos 6 caracteres.')
      return
    }
    if (consultant_id === 0) {
      toast.warn('Selecione um consultor. ')
      return
    }
    if (category_id === 0) {
      toast.warn('Selecione uma categoria. ')
      return
    }

    if (!contact1) {
      toast.warn('Preencha ao menos um número para contato. ')
      return
    }

    try {
      const { data } = await postFile(file)
      const payload = {
        description,
        fantasy_name,
        document,
        company_name,
        representative: response_name,
        contact1,
        email,
        password,
        cep,
        city,
        neighborhood,
        number,
        state,
        complement,
        credit,
        file_id: data.id,
        category_id,
        percentage,
        status,
        street,
        contact2,
        consultant_id,
        type,
        facebook,
        instagram,
        site,
        catz_fee
      }
      await createAssociateAdmin(cleanObject(payload))
      toast.success('Associado criado com sucesso')

      resetValues()
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            toast.error('Erro no processo de validação dos dados.')
            return
          case 401:
            toast.error('Email já cadastrado.')
            return
          case 409:
            toast.error('Transaction Failed.')
            return
          default:
            toast.error(
              'Algo de errado aconteceu' +
                'Code: ' +
                error.response.status +
                'Msg: ' +
                error.reponse.data
            )
        }
      } else {
        toast.error('Submit failed')
        return
      }
    }
  }

  function resetValues() {
    setDescription('')
    setFantasy_name('')
    setDocument('')
    setCompanyName('')
    setResponseName('')
    setContact1('')
    setEmail('')
    setPassword('')
    setCep('')
    setCity('')
    setNeighborhood('')
    setNumber('')
    setState('none')
    setComplement('')
    setCredit('')
    setCategory_id(0)
    setPercentage(10)
    setStatus(1)
    setStreet('')
    setContact2('')
    setconsultant_id(0)
    setType(1)
    setFacebook('')
    setInstagram('')
    setSite('')
    setPasswordConfirm('')
    setImagePreviewUrl('/img/preview-clube.webp')
  }

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.TextWrapper items={3}>
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
            </S.TextWrapper>
            <S.TextWrapper items={1}>
              <S.Label>Descrição</S.Label>
              <S.TextArea
                isDescription
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Site"
                onChange={(e) => setSite(e.target.value)}
                value={site}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Facebook"
                onChange={(e) => setFacebook(e.target.value)}
                value={facebook}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Instagram"
                onChange={(e) => setInstagram(e.target.value)}
                value={instagram}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria</S.Label>
              <S.Select
                onChange={(e) => setCategory_id(Number(e.target.value))}
                value={category_id}
              >
                <option value={0} selected disabled hidden>
                  Selecione
                </option>
                {categories &&
                  categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nome Fantasia"
                onChange={(e) => setFantasy_name(e.target.value)}
                value={fantasy_name}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Razão Social"
                onChange={(e) => setCompanyName(e.target.value)}
                value={company_name}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="CPF/CNPJ"
                required
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                maxLength={18}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nome Responsável"
                required
                onChange={(e) => setResponseName(e.target.value)}
                value={response_name}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Cep"
                onChange={(e) => setCep(e.target.value)}
                value={cep}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
                required
              />
            </S.TextWrapper>

            <S.SelectWrapper>
              <S.Label>Estado</S.Label>
              <S.Select
                required
                onChange={(e) => setState(e.target.value)}
                value={state}
              >
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal </option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro </option>
                <option value="RN">Rio Grande do Norte </option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima </option>
                <option value="SC">Santa Catarina </option>
                <option value="SP">São Paulo </option>
                <option value="SE">Sergipe </option>
                <option value="TO">Tocantins </option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Cidade"
                required
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Bairro"
                required
                onChange={(e) => setNeighborhood(e.target.value)}
                value={neighborhood}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Rua"
                required
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Número"
                required
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Complemento"
                required
                onChange={(e) => setComplement(e.target.value)}
                value={complement}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Contato 1"
                required
                onChange={(e) => setContact1(e.target.value)}
                value={contact1}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Contato 2"
                onChange={(e) => setContact2(e.target.value)}
                value={contact2}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Consultor</S.Label>
              <S.Select
                required
                onChange={(e) => setconsultant_id(Number(e.target.value))}
                value={consultant_id}
              >
                <option value={0} selected disabled hidden>
                  Selecione
                </option>
                {consultants &&
                  consultants.map((cons: any) => (
                    <option key={cons.id} value={cons.id}>
                      {cons.id} - {cons.identification}
                    </option>
                  ))}
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Percentual"
                required
                onChange={(e) => setPercentage(Number(e.target.value))}
                value={percentage}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Crédito Inicial"
                required
                onChange={(e) => setCredit(e.target.value)}
                value={credit}
                step=".01"
                min="0"
                type="number"
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Porcentagem em CATZ"
                required
                onChange={(e) => setCatz_fee(Number(e.target.value))}
                step=".01"
                min="0"
                type="number"
                value={catz_fee}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Confirmar Senha"
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                value={passwordConfirm}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <S.WrapperRadio>
                <S.Label>SITUAÇÃO</S.Label>
                <S.RadioLabel onClick={() => setStatus(1)}>
                  <S.InputRadio
                    type="radio"
                    id="sim"
                    name="direct"
                    value="sim"
                    defaultChecked
                  />
                  Ativo
                </S.RadioLabel>

                <S.RadioLabel onClick={() => setStatus(2)}>
                  <S.InputRadio
                    type="radio"
                    id="nao"
                    name="direct"
                    value="nao"
                  />
                  Inativo
                </S.RadioLabel>
              </S.WrapperRadio>
            </S.TextWrapper>

            <S.TextWrapper items={3}>
              <S.WrapperRadio>
                <S.Label>TIPO</S.Label>
                <S.RadioLabel onClick={() => setType(2)}>
                  <S.InputRadio type="radio" id="oculto" name="oculto" />
                  Oculto
                </S.RadioLabel>

                <S.RadioLabel onClick={() => setType(1)}>
                  <S.InputRadio
                    type="radio"
                    id="visivel"
                    name="oculto"
                    defaultChecked
                  />
                  Vísivel
                </S.RadioLabel>
              </S.WrapperRadio>
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={1}>
              <S.Label>Observações Gerais</S.Label>
              <S.TextArea />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <Button
              size="large"
              background="white"
              radius="radius100"
              onClick={refreshPage}
            >
              CANCELAR
            </Button>
            <Button
              size="large"
              background="green"
              radius="radius100"
              onClick={handlesubmit}
            >
              CADASTRAR
            </Button>
          </S.InlineWrapper>
        </S.TextFieldWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default CreateAssociate
