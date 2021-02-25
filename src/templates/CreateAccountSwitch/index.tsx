import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import Link from 'next/link'
import * as S from './styles'

export type CreateAccountProps = {
  id?: string | string[]
}

const CreateAccountSwitch = ({ id }: CreateAccountProps) => {
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
          <Link href={id ? `/associar-se-pj?id=${id}` : '/associar-se-pj'}>
            <Button background="green" radius="radius100">
              Pessoa Jurídica
            </Button>
          </Link>

          <Link href={id ? `/associar-se-pf?id=${id}` : '/associar-se-pf'}>
            <Button background="green" radius="radius100">
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
