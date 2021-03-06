import Button from 'components/Button'
import TextField from 'components/TextField'
import { PutFranchise, showFranchise } from 'Context/Action/Franchise'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Franquia } from 'Types'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'

import * as S from './styles'

type props = {
  id: number
}

const ShowFranchise = ({ id }: props) => {
  const [franchise, setFranchise] = useState<Franquia>()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [document, setDocument] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [ie, setIe] = useState<number>()
  const [im, setIm] = useState<number>()
  const [contact1, setContact1] = useState('')
  const [contact2, setContact2] = useState('')
  const [getway_email, setGetwayEmail] = useState('')
  const [getway_token, setGetwayToken] = useState('')
  const [percentage, setPercentage] = useState(10)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [status, setStatus] = useState(1)

  const [cep, setCep] = useState('')
  const [state, setState] = useState('none')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPassWordError] = useState(false)
  const [documentError, setDocumentError] = useState(false)

  useEffect(() => {
    async function LoadFranchise() {
      try {
        const { data } = await showFranchise(id)
        setFranchise(data)
        setEmail(data.email)
        setName(data.name)
        setDocument(cpfCnpjMask(data.document))
        setCompanyName(data.company_name)
        setIe(data.ie)
        setIm(data.im)
        setContact1(cellphoneeMask(data.contact1))
        setContact2(cellphoneeMask(data.contact2 || ''))
        setGetwayToken(data.getway_token)
        setGetwayEmail(data.getway_email)
        setPercentage(data.percentage)
        setStatus(data.status)
        setCep(cepMask(data.Address?.cep || '') || '')
        setState(data.Address?.state || 'none')
        setCity(data.Address?.city || '')
        setNeighborhood(data.Address?.neighborhood || '')
        setStreet(data.Address?.street || '')
        setNumber(data.Address?.number || '')
        setComplement(data.Address?.complement || '')
      } catch (err) {
        toast.error('Erro de conexão, caso persista, contate o administrador')
      }
    }

    LoadFranchise()
  }, [id])

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
      id,
      company_name,
      contact1,
      document,
      email,
      getway_email,
      getway_token,
      percentage,
      contact2,
      cep,
      city,
      complement,
      neighborhood,
      street,
      number,
      state,
      status,
      im,
      ie,
      password,
      name
    }

    try {
      await PutFranchise(cleanObject(payload))
      toast.success('Franquia atualizada com sucesso!')
      const { data } = await showFranchise(id)
      setFranchise(data)
      setEmail(data.email)
      setName(data.name)
      setDocument(cpfCnpjMask(data.document))
      setCompanyName(data.company_name)
      setIe(data.ie)
      setIm(data.im)
      setContact1(cellphoneeMask(data.contact1))
      setContact2(cellphoneeMask(data.contact2 || ''))
      setGetwayToken(data.getway_token)
      setGetwayEmail(data.getway_email)
      setPercentage(data.percentage)
      setStatus(data.status)
      setCep(cepMask(data.Address?.cep || '') || '')
      setState(data.Address?.state || 'none')
      setCity(data.Address?.city || '')
      setNeighborhood(data.Address?.neighborhood || '')
      setStreet(data.Address?.street || '')
      setNumber(data.Address?.number || '')
      setComplement(data.Address?.complement || '')
    } catch (err) {
      toast.error(
        'Algo de errado aconteceu, verifique os dados. Se persistir, contate o administrador do sistema'
      )
    }
  }

  return (
    <S.Wrapper>
      {franchise && (
        <S.FormWrapper>
          <S.TextFieldWrapper>
            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="E-mail"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Nome Franquia"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="CPF/CNPJ"
                  required
                  onChange={(e) => setDocument(e.target.value)}
                  value={cpfCnpjMask(document)}
                  error={documentError ? 'Documento inválido' : undefined}
                  maxLength={18}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Razão Social"
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={company_name}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="IE"
                  value={ie}
                  required
                  type="number"
                  onChange={(e) => setIe(Number(e.target.value))}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="IM"
                  required
                  type="number"
                  onChange={(e) => setIm(Number(e.target.value))}
                  value={im}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
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
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
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
                  value={cellphoneeMask(contact1)}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Contato 2"
                  required
                  onChange={(e) => setContact2(e.target.value)}
                  value={cellphoneeMask(contact2)}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="E-mail Pagseguro"
                  required
                  onChange={(e) => setGetwayEmail(e.target.value)}
                  value={getway_email}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Token Pagseguro"
                  required
                  onChange={(e) => setGetwayToken(e.target.value)}
                  value={getway_token}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Percentual Comissão"
                  required
                  type="number"
                  step="0.1"
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  value={percentage}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Nova Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Confirmar Senha"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
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
                      checked={status === 2}
                    />
                    Inativo
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
              <Button size="large" background="white" radius="radius100">
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
      )}
    </S.Wrapper>
  )
}

export default ShowFranchise
