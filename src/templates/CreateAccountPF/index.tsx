import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import TextField from 'components/TextField'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

const CreatePJ = () => {
  const [scrollY, setScrollY] = useState(0)
  const [section, setSection] = useState('')
  const sectionHomeRef = useRef<null | HTMLDivElement>(null)
  const sectionOClubeRef = useRef<null | HTMLDivElement>(null)
  const sectionComoFuncionaRef = useRef<null | HTMLDivElement>(null)

  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  }, [])

  useEffect(() => {
    switch (section) {
      case 'sectionHomeRef':
        sectionHomeRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        return
      case 'sectionOClubeRef':
        sectionOClubeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
        return
      case 'sectionComoFuncionaRef':
        sectionComoFuncionaRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        return
    }
  }, [section])

  function handleChange(newValue: string) {
    setSection(newValue)
  }

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu handleChange={handleChange} background="white" />
      </S.MenuWrapper>
      <S.TitleWrapper>
        <S.Title>Pessoa Física</S.Title>
        <div>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
        <Button size="large" background="green" radius="radius100">
          Trocar para Pessoa Jurídica
        </Button>
      </S.TitleWrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Consultor</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option>Loren Ispun</option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Nome da Empresa" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria de Serviços</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option>Loren Ispun</option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Sugerir Categoria" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Nome Responsável*" />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField label="E-mail" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="CPF*" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Telefone Comercial*" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Celular/Whatsapp*" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Crédito Inicial Desejado" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Site" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Facebook" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Instagram" />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Cep" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Estado" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Cidade" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Bairro" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Rua" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Número" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Complemento" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Senha" />
            </S.TextWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Confirmar Senha" />
            </S.TextWrapper>
          </S.InlineWrapper>
          <Button
            fullWidth
            size="xlarge"
            background="orange"
            radius="radius300"
          >
            Entrar
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

export default CreatePJ
