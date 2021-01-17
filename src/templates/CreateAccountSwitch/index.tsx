import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import Link from 'next/link'
import * as S from './styles'

const CreateAccountSwitch = () => {
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu background="white" />
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
          <Link href="/associar-se-pj">
            <Button size="large" background="green" radius="radius100">
              Pessoa Jurídica
            </Button>
          </Link>

          <Link href="/associar-se-pf">
            <Button size="large" background="green" radius="radius100">
              Pessoa Física
            </Button>
          </Link>
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
