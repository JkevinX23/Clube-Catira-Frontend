import Button from 'components/Button'
import TextField from 'components/TextField'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'
import { toast } from 'react-toastify'
import { getCategoriesAdmin } from 'Context/Action/Category'
import { getConsultants } from 'Context/Action/Consultant'
import { postFile } from 'Context/Action/File'
import { showAssociate, updateAssociateAdmin } from 'Context/Action/Associates'
import { getAdminProfile } from 'Context/Action/Admin'
import { GetFranchiseProfile } from 'Context/Action/Franchise'

const ShowProfile = () => {
  const [profile, setProfile] = useState<any>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [contact1, setContact1] = useState('')
  const [contact2, setContact2] = useState('')
  const [document, setDocument] = useState('')
  const [getway_email, setGetwayEmail] = useState('')
  const [getway_token, setGetwayToken] = useState('')

  const [status, setStatus] = useState('')
  const [percentage, setPercentage] = useState(10)
  const [ie, setIe] = useState<any>(null)
  const [im, setIm] = useState<any>(null)

  const [cep, setCep] = useState('')
  const [state, setState] = useState('none')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data } = await GetFranchiseProfile()
        setProfile(data)
        setName(data.name)
        setContact1(data.contact1)
        setContact2(data.contact2 || '')
        setEmail(data.email)
        setCompanyName(data.company_name)
        setDocument(data.document)
        setGetwayEmail(data.getway_email)
        setGetwayToken(data.getway_token)

        setStatus(data.status === 1 ? 'Ativo' : 'Inativo')
        setPercentage(data.percentage)
        setIe(data.ie)
        setIm(data.im)

        setCep(data.Address.cep)
        setState(data.Address.state)
        setCity(data.Address.city)
        setNeighborhood(data.Address.neighborhood)
        setStreet(data.Address.street)
        setNumber(data.Address.number)
        setComplement(data.Address.complement || '')
      } catch (err) {
        console.log(err)
        toast.warn(
          'Algo de errado ocorreu, caso persista, contate o amdinistrador do sistema.'
        )
      }
    }
    loadProfile()
  }, [])

  function refreshPage() {
    window.location.reload()
  }

  useEffect(() => {
    if (document) {
      setDocument(cpfCnpjMask(document))
    }
  }, [document])

  useEffect(() => {
    if (cep) {
      setCep(cepMask(cep))
    }
  }, [cep])

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nome"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </S.TextWrapper>
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
                label="Razão Social"
                onChange={(e) => setCompanyName(e.target.value)}
                value={company_name}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
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
            <S.TextWrapper items={3}>
              <TextField
                label="Getway Email"
                required
                onChange={(e) => setGetwayEmail(e.target.value)}
                value={getway_email}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Getway Token"
                required
                onChange={(e) => setGetwayToken(e.target.value)}
                value={getway_token}
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
            <S.TextWrapper items={1}>
              <TextField
                label="Complemento"
                required
                onChange={(e) => setComplement(e.target.value)}
                value={complement}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
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
                required
                onChange={(e) => setContact2(e.target.value)}
                value={contact2}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="IE"
                required
                onChange={(e) => setIe(e.target.value)}
                value={ie}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="IM"
                required
                onChange={(e) => setIm(e.target.value)}
                value={im}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Status" required value={status} />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Porcentagem" required value={percentage} />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Senha Atual"
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Nova Senha"
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                value={passwordConfirm}
              />
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
              // onClick={handlesubmit}
            >
              ATUALIZAR
            </Button>
          </S.InlineWrapper>
        </S.TextFieldWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default ShowProfile
