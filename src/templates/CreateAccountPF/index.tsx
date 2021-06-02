/* eslint-disable react/no-string-refs */
import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import searchCep from 'cep-promise'
import { cellphoneeMask, cepMask, cpfCnpjMask } from 'utils/Masks'
import { isEmail, validarCPF, validarCNPJ, cleanObject } from 'utils/Validation'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SociaisSection from 'components/SociaisSection'
import TextField from 'components/TextField'
import * as S from './styles'
import Link from 'next/link'
import { GetCategoriesNA, GetConsultantsNoAuth } from 'Types'
import { createAssociateNA } from 'Context/Action/Associates'
import { SyntheticEvent } from 'Types'
import { postFile } from 'Context/Action/File'

type pageProps = {
  categories: GetCategoriesNA[]
  consultants: GetConsultantsNoAuth[]
}

const CreatePF = ({ categories, consultants }: pageProps) => {
  const router = useRouter()
  const [file, setFile] = useState<FormData>()
  const [description, setDescription] = useState('')
  const [site, setSite] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [category_id, setCategory_id] = useState(0)
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
  const [credit, setCredit] = useState('')
  const [status, setStatus] = useState(1)
  const [consultant_id, setconsultant_id] = useState(0)
  const [file_id, setFile_id] = useState(0)
  const [accept, setAccept] = useState(false)

  const {
    query: { id }
  } = router

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
        data.append('file', file)
        setFile(data)
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  useEffect(() => {
    if (consultants?.length === 1) {
      setconsultant_id(consultants[0].id)
    }
  }, [consultants])
  useEffect(() => {
    if (document) {
      setDocument(cpfCnpjMask(document))
    }
  }, [document])

  useEffect(() => {
    if (category_id) {
      console.log({ category_id })
    }
  }, [category_id])

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
    if (!accept) {
      toast.warn(
        'Aceite os termos de adesão para se cadastrar no CLUBE DA CATIRA'
      )
      return
    }
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

    if (!file) {
      toast.warn('File not found')
      return
    }

    let data
    try {
      const resp = await postFile(file)
      data = resp.data
    } catch (err) {
      console.log(err)
      toast.error('Erro ao carregar Logo.  ' + err)
      return
    }

    try {
      const payload = {
        description,
        fantasy_name,
        document,
        company_name: fantasy_name,
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

        status,
        street,
        contact2,
        consultant_id,
        facebook,
        instagram,
        site
      }
      await createAssociateNA(cleanObject(payload))
      router.push('sign-in')
      toast.success(
        'Parabens, seu registro foi criado com sucesso. Iremos analisar seus dados e assim que possível aprovaremos seu cadastro.'
      )
    } catch (err) {
      toast.error(
        'Algo de errado aconteceu, verifique os dados. Se persistir, contate o administrador do sistema. Code: ' +
          err
      )
    }
  }

  function onCheck(event: any) {
    setAccept(event.target.checked || false)
  }
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu background="white" />
      </S.MenuWrapper>
      <S.TitleWrapper>
        <S.Title>Pessoa Física</S.Title>
        <div>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
        <Link href={id ? `/associar-se-pj?id=${id}` : '/associar-se-pj'}>
          <Button background="green" radius="radius100">
            Trocar para Pessoa Jurídica
          </Button>
        </Link>
      </S.TitleWrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Consultor</S.Label>
              {consultants?.length > 1 ? (
                <S.Select
                  onChange={(e) =>
                    setconsultant_id(
                      Number((e.target as HTMLSelectElement).value)
                    )
                  }
                >
                  <option value="none" selected disabled hidden>
                    Selecione
                  </option>
                  {consultants &&
                    consultants.map((cons) => (
                      <option key={cons.id} value={cons.id}>
                        {cons.identification}
                      </option>
                    ))}
                </S.Select>
              ) : (
                <S.Select disabled>
                  {consultants?.map((cons) => (
                    <option key={cons.id} value={cons.id} selected>
                      {cons.identification}
                    </option>
                  ))}
                </S.Select>
              )}
            </S.SelectWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Nome Fantasia"
                onChange={(e) => setFantasy_name(e.target.value)}
                value={fantasy_name}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria de Serviços</S.Label>
              <S.Select
                onChange={(e) =>
                  setCategory_id(Number((e.target as HTMLSelectElement).value))
                }
              >
                <option value={0} hidden>
                  Selecione
                </option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Sugerir Categoria" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Nome Responsável"
                required
                onChange={(e) => setResponseName(e.target.value)}
                value={response_name}
              />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
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
                label="CPF"
                required
                onChange={(e) => setDocument(e.target.value)}
                value={document}
                maxLength={18}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Telefone Comercial*"
                required
                onChange={(e) => setContact1(e.target.value)}
                value={contact1}
              />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Celular/Whatsapp*"
                onChange={(e) => setContact2(e.target.value)}
                value={contact2}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField
                label="Crédito Inicial Desejado"
                required
                onChange={(e) => setCredit(e.target.value)}
                value={credit}
              />
            </S.TextWrapper>
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
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Instagram"
                onChange={(e) => setInstagram(e.target.value)}
                value={instagram}
              />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
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
          </S.InlineWrapper>

          <S.InlineWrapper>
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
            <S.TextWrapper items={3}>
              <TextField
                label="Bairro"
                required
                onChange={(e) => setNeighborhood(e.target.value)}
                value={neighborhood}
              />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
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
            <S.TextWrapper items={3}>
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
              {/* <S.ImageWrapper>
                <ImageInput cat={{ setFile_id }} />
              </S.ImageWrapper> */}
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
            <S.TextWrapper items={2}>
              <TextField
                label="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
              />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField
                label="Confirmar Senha"
                required
                onChange={(e) => setPasswordConfirm(e.target.value)}
                type="password"
                value={passwordConfirm}
              />
            </S.TextWrapper>
          </S.InlineWrapper>
          <S.TextWrapper items={1}>
            <S.LabelTerms htmlFor="checkbox">
              <input
                id="checkbox"
                type="checkbox"
                onChange={(e) => onCheck(e)}
                defaultChecked={false}
              />{' '}
              CONCORDO COM O{' '}
              <a href="/adesao">CONTRATO DE ADESÃO DO CLUBE DA CATIRA</a> E
              AFIRMO QUE AS INFOMRAÇÕES PREENCHIDAS ESTÃO CORRETAS.
            </S.LabelTerms>
          </S.TextWrapper>

          <Button
            fullWidth
            background="orange"
            radius="radius300"
            onClick={() => handlesubmit()}
            // onClick={() => print()}
          >
            Confirmar
          </Button>
        </S.TextFieldWrapper>
      </S.FormWrapper>

      <S.Footer>
        <SociaisSection />
        <Footer />
      </S.Footer>
    </S.Wrapper>
  )
}

export default CreatePF
