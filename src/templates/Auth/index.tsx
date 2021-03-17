import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import TextField from 'components/TextField'
import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'
import AuthContext from 'Context/Reduces/Auth'

const Auth = () => {
  const { signIn } = useContext(AuthContext)

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  async function handleAuth() {
    await signIn({ email, password })
  }

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu handleChange={handleChange} background="white" />
      </S.MenuWrapper>
      <S.TitleWrapper>
        <S.Title>Área de Negócios</S.Title>
        <div>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
      </S.TitleWrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
          <TextField
            label="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <S.ForgotPassword onClick={() => router.push('/recuperar-senha')}>
            {' '}
            Esqueceu a senha?{' '}
          </S.ForgotPassword>
          <S.Button>
            <Button
              fullWidth
              background="orange"
              radius="radius300"
              onClick={handleAuth}
            >
              Entrar
            </Button>
          </S.Button>
        </S.TextFieldWrapper>
      </S.FormWrapper>

      <S.Footer>
        <SociaisSection />
        <Footer />
      </S.Footer>
    </S.Wrapper>
  )
}

export default Auth
