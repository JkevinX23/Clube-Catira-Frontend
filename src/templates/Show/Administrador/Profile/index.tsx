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
import { getAdminProfile, putAdmin } from 'Context/Action/Admin'

const ShowProfileAdministrador = () => {
  const [profile, setProfile] = useState<any>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [contact, setContact] = useState('')
  const [document, setDocument] = useState('')
  const [getway_email, setGetwayEmail] = useState('')
  const [getway_token, setGetwayToken] = useState('')

  const [cep, setCep] = useState('')
  const [state, setState] = useState('none')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPassWordError] = useState(false)
  const [documentError, setDocumentError] = useState(false)

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data } = await getAdminProfile()
        setProfile(data)
        setName(data.name)
        setContact(data.contact)
        setEmail(data.email)
        setCompanyName(data.company_name)
        setDocument(data.document)
        setGetwayEmail(data.getway_email)
        setGetwayToken(data.getway_token)

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

  async function handleUpdate() {
    setEmailError(false)
    setPassWordError(false)
    setDocumentError(false)
    if (!isEmail(email)) {
      setEmailError(true)
      return
    }
    if (password !== passwordConfirm) {
      toast.warn('As senhas não coorespondem.')
      setPassWordError(true)
      return
    }
    if (password && !oldPassword) {
      toast.warn('Para alterar a senha, informe a semha antiga.')
      setPassWordError(true)
      return
    }

    if (document.length === 14) {
      if (!validarCPF(document)) {
        setDocumentError(true)
        return
      }
    } else {
      if (!validarCNPJ(document)) {
        setDocumentError(true)
        return
      }
    }

    if (password && password.length < 6) {
      toast.info('Sua senha deve ter pelo menos 6 caracteres.')
      return
    }
    const payload = {
      name,
      email,
      company_name,
      contact,
      document,
      password,
      getway_email,
      getway_token,
      cep,
      city,
      complement,
      neighborhood,
      street,
      number,
      state,
      oldPassword
    }

    try {
      await putAdmin(cleanObject(payload))
      toast.success('Perfil atualizada com sucesso!')
      const { data } = await getAdminProfile()
      setProfile(data)
      setName(data.name)
      setContact(data.contact)
      setEmail(data.email)
      setCompanyName(data.company_name)
      setDocument(data.document)
      setGetwayEmail(data.getway_email)
      setGetwayToken(data.getway_token)

      setCep(data.Address.cep)
      setState(data.Address.state)
      setCity(data.Address.city)
      setNeighborhood(data.Address.neighborhood)
      setStreet(data.Address.street)
      setNumber(data.Address.number)

      setComplement(data.Address.complement || '')
      setPasswordConfirm('')
      setOldPassword('')

      setEmailError(false)
      setPassWordError(false)
      setDocumentError(false)
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
            <S.TextWrapper items={2}>
              <TextField
                label="Complemento"
                required
                onChange={(e) => setComplement(e.target.value)}
                value={complement}
              />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Contato"
                required
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Senha Atual"
                required
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nova senha"
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Confirme Nova Senha"
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                value={passwordConfirm}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={1}></S.TextWrapper>
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
              onClick={handleUpdate}
            >
              ATUALIZAR
            </Button>
          </S.InlineWrapper>
        </S.TextFieldWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default ShowProfileAdministrador
