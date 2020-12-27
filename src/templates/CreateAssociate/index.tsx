import Button from 'components/Button'
import TextField from 'components/TextField'
import { useState } from 'react'
import { SyntheticEvent } from 'Types'
import * as S from './styles'

const CreateAssociate = () => {
  const [file, setFile] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >('/img/preview-clube.png')

  function handleImageChange(e: SyntheticEvent) {
    e.preventDefault()
    if (window.FileReader) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        const file = e.target.files[0]

        reader.onloadend = () => {
          setFile(file)
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }
  return (
    <S.Wrapper>
      <S.FormWrapper>
        <S.TextFieldWrapper>
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
            </S.TextWrapper>
            <S.TextWrapper items={1}>
              <S.Label>Descrição</S.Label>
              <S.TextArea isDescription />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Site" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Facebook" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Instagram" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Categoria</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option>Geral</option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Nome Fantasia" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Razão Social" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="CPF/CNPJ" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Nome Responsável" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Email" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Cep" />
            </S.TextWrapper>
            <S.SelectWrapper>
              <S.Label>Estado</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option>MG</option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Cidade" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Bairro" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Rua" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Número" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Complemento" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Telefone Fixo" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Telefone Celular" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.SelectWrapper>
              <S.Label>Consultor</S.Label>
              <S.Select>
                <option value="none" selected disabled hidden>
                  Selecione
                </option>
                <option>Kevin - Moc</option>
              </S.Select>
            </S.SelectWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Porcentagem de Compra" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Crédito Inicial" />
            </S.TextWrapper>
          </S.InlineWrapper>

          <S.InlineWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Senha" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <TextField label="Confirmar Senha" />
            </S.TextWrapper>
            <S.TextWrapper items={3}>
              <S.WrapperRadio>
                <S.Label>SITUAÇÃO</S.Label>
                <S.RadioLabel>
                  <S.InputRadio
                    type="radio"
                    id="sim"
                    name="direct"
                    value="sim"
                    defaultChecked
                  />
                  Ativo
                </S.RadioLabel>

                <S.RadioLabel>
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
            <Button size="large" background="white" radius="radius100">
              CANCELAR
            </Button>
            <Button size="large" background="green" radius="radius100">
              CADASTRAR
            </Button>
          </S.InlineWrapper>
        </S.TextFieldWrapper>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default CreateAssociate
