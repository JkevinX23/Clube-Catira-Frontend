import Button from 'components/Button'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import TextField from 'components/TextField'
import * as S from './styles'
import Link from 'next/link'

import { GetCategoriesNA, GetConsultantsNoAuth } from 'Types'

type pageProps = {
  categories: GetCategoriesNA[]
  consultants: GetConsultantsNoAuth[]
}
const CreatePJ = ({ categories, consultants }: pageProps) => {
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <Menu background="white" />
      </S.MenuWrapper>
      <S.TitleWrapper>
        <S.Title>Pessoa Jurídica</S.Title>
        <div>
          <S.DecorationLineWrapper isPrimary />
          <S.DecorationLineWrapper />
        </div>
        <Link href="/associar-se-pf">
          <Button size="large" background="green" radius="radius100">
            Trocar para Pessoa Física
          </Button>
        </Link>
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
                {consultants &&
                  consultants.map((cons) => (
                    <option key={cons.id}>{cons.identification}</option>
                  ))}
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={2}>
              <TextField label="Nome Fantasia*" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Razão Social" />
            </S.TextWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria de Serviços</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat.id}>{cat.name}</option>
                  ))}
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
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
              <TextField label="CNPJ*" />
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

export default CreatePJ
