import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import { SyntheticEvent } from 'Types'
import * as S from './styles'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'
import { toast } from 'react-toastify'
import { getCategoriesAdmin } from 'Context/Action/Category'
import { getConsultants } from 'Context/Action/Consultant'
import { postFile } from 'Context/Action/File'
import { showAssociate, updateAssociateAdmin } from 'Context/Action/Associates'

type props = {
  id: number
}

const ShowAssociate = ({ id }: props) => {
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
  const [credit, setCredit] = useState(0)
  const [status, setStatus] = useState(1)
  const [type, setType] = useState(1)
  const [consultant_id, setconsultant_id] = useState(0)
  const [file_id, setFile_id] = useState(0)
  const [fileUrl, setFileUrl] = useState('/img/preview-clube.webp')

  useEffect(() => {
    async function loadAssociate() {
      const { data } = await showAssociate(id)
      setDescription(data.description)
      setFantasy_name(data.fantasy_name)
      setDocument(data.document)
      setCompanyName(data.company_name)
      setResponseName(data.representative)
      setContact1(data.contact1)
      setSite(data.site || '')
      setFacebook(data.facebook || '')
      setInstagram(data.instagram || '')
      setCompanyName(data.company_name)
      setEmail(data.email)
      setCep(data.Address.cep)
      setState(data.Address.state)
      setCity(data.Address.city)
      setNeighborhood(data.Address.neighborhood)
      setStreet(data.Address.street)
      setNumber(data.Address.number)
      setComplement(data.Address.complement || '')
      setContact1(data.contact1)
      setContact2(data.contact2 || '')
      setPercentage(data.percentage)
      setCredit(data.credit)
      setStatus(data.status)
      setType(data.type)
      setCategory_id(data.category_id || 0)
      setconsultant_id(data.consultant_id)
      setFileUrl(data.File.url)
    }
    loadAssociate()
  }, [id])

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
    }
  }, [cep])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await getCategoriesAdmin()
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

    if (password && password.length < 6) {
      toast.info('Sua senha deve ter pelo menos 6 caracteres.')
      return
    }

    try {
      let file_id
      if (file) {
        const { data } = await postFile(file)
        file_id = data.id
      }
      const payload = {
        id,
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
        file_id,
        category_id,
        percentage,
        status,
        street,
        contact2,
        consultant_id,
        type,
        facebook,
        instagram,
        site
      }
      await updateAssociateAdmin(cleanObject(payload))
      toast.success('Associado atualizado com sucesso!')
    } catch (err) {
      toast.error(
        'Algo de errado aconteceu, verifique os dados. Se persistir, contate o administrador do sistema'
      )
    }
  }

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <S.Image src={fileUrl} width={256} height={182} />
            </S.TextWrapper>
            <S.TextWrapper items={1}>
              <S.Label>Descrição</S.Label>
              <S.TextArea isDescription required value={description} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Site" value={site} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Facebook" value={facebook} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Instagram" value={instagram} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria</S.Label>
              <S.Select value={category_id}>
                <option value="none" selected disabled hidden>
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
              <TextField label="Nome Fantasia" value={fantasy_name} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Razão Social" value={company_name} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="CPF/CNPJ"
                required
                value={document}
                maxLength={18}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nome Responsável"
                required
                value={response_name}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Email"
                required
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
                value={cep}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
                required
              />
            </S.TextWrapper>

            <S.SelectWrapper>
              <S.Label>Estado</S.Label>
              <S.Select required value={state}>
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
              <TextField label="Cidade" required value={city} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Bairro" required value={neighborhood} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Rua" required value={street} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Número" required value={number} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Complemento" required value={complement} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Contato 1" required value={contact1} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Contato 2" value={contact2} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Percentual" required value={percentage} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Crédito Inicial" required value={credit} />
            </S.TextWrapper>
            <S.TextWrapper items={3} />
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <S.WrapperRadio>
                <S.Label>SITUAÇÃO</S.Label>
                <S.RadioLabel onClick={() => setStatus(0)}>
                  <S.InputRadio
                    type="radio"
                    id="sim"
                    name="direct"
                    value="sim"
                    checked={status === 0}
                  />
                  Pendente
                </S.RadioLabel>
                <S.RadioLabel onClick={() => setStatus(1)}>
                  <S.InputRadio
                    type="radio"
                    id="sim"
                    name="direct"
                    value="sim"
                    checked={status === 1}
                  />
                  Ativo
                </S.RadioLabel>

                <S.RadioLabel onClick={() => setStatus(2)}>
                  <S.InputRadio
                    type="radio"
                    id="nao"
                    name="direct"
                    value="nao"
                    checked={status >= 2}
                  />
                  Inativo
                </S.RadioLabel>
              </S.WrapperRadio>
            </S.TextWrapper>

            <S.TextWrapper items={1}>
              <S.WrapperRadio>
                <S.Label>TIPO</S.Label>
                <S.RadioLabel onClick={() => setType(2)}>
                  <S.InputRadio
                    type="radio"
                    id="oculto"
                    name="oculto"
                    checked={type === 2}
                  />
                  Oculto
                </S.RadioLabel>

                <S.RadioLabel onClick={() => setType(1)}>
                  <S.InputRadio
                    type="radio"
                    id="visivel"
                    name="oculto"
                    checked={type === 1}
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
          </S.InlineWrapper>
        </S.TextFieldWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default ShowAssociate
