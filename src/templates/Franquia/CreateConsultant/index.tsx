import Button from 'components/Button'
import TextField from 'components/TextField'
import { postConsultant } from 'Context/Action/Consultant'
import { getFranchise } from 'Context/Action/Franchise'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import searchCep from 'cep-promise'
import { GetFranchises, PostConsultantProps } from 'Types'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'
import * as S from './styles'

const CreateConsultant = () => {
  const [franchises, setFranchises] = useState<any>([])
  const [name, setName] = useState('')
  const [identification, SetIdentification] = useState('')
  const [email, setEmail] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [document, setDocument] = useState('')
  const [contact1, setContact1] = useState('')
  const [contact2, setContact2] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [percentage, setPercentage] = useState(10)
  const [franchise_id, setFranchise_id] = useState(10)
  const [status, setStatus] = useState(1)

  const [cep, setCep] = useState('')
  const [state, setState] = useState('none')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')

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

    if (password.length < 6) {
      toast.info('Sua senha deve ter pelo menos 6 caracteres.')
      return
    }
    const data = {
      name,
      identification,
      document,
      contact1,
      contact2,
      cep,
      state,
      city,
      neighborhood,
      street,
      number,
      complement,
      email,

      company_name,
      franchise_id,
      password,
      percentage,
      status
    } as PostConsultantProps
    /// Reference point

    try {
      await postConsultant(cleanObject(data))
      toast.success('Consultor criado com sucesso')
    } catch (err) {
      toast.error(
        'Algo de errado aconteceu, verifique os dados. Se persistir, contate o administrador do sistema'
      )
    }
  }

  useEffect(() => {
    async function loadFranchises() {
      const { data } = await getFranchise()
      setFranchises(data)
    }

    loadFranchises()
  }, [])
  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Nome Completo"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Identificação"
                required
                onChange={(e) => SetIdentification(e.target.value)}
                value={identification}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="E-mail"
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
                label="CPF/CNPJ"
                required
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                maxLength={18}
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
                label="Percentual Comissão"
                required
                onChange={(e) => setPercentage(Number(e.target.value))}
                value={percentage}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3} />
          </S.InlineWrapper>

          <S.InlineWrapper>
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

export default CreateConsultant
