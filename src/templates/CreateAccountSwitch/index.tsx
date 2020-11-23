import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

const CreateAccountSwitch = () => {
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
        <S.Title>Cadastre-se</S.Title>
        <div>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
      </S.TitleWrapper>
      <S.FormWrapper>
        <S.SubTitle>Tipo de pessoa</S.SubTitle>

        <S.ButtonWrapper>
          <Button size="large" background="green" radius="radius100">
            Pessoa Jurídica
          </Button>

          <Button size="large" background="green" radius="radius100">
            Pessoa Física
          </Button>
        </S.ButtonWrapper>
      </S.FormWrapper>

      <S.Footer>
        <SociaisSection />
        <Footer />
      </S.Footer>
    </S.Wrapper>
  )
}

export default CreateAccountSwitch
