import Button from 'components/Button'
import TextField from 'components/TextField'
import { showConsultant } from 'Context/Action/Consultant'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Consultant } from 'Types'
import * as S from './styles'

type props = {
  id: number
}

const ShowConsultant = ({ id }: props) => {
  const [consultant, setConsultant] = useState<Consultant>()

  useEffect(() => {
    async function LoadConsultant() {
      try {
        const { data } = await showConsultant(id)
        setConsultant(data)
      } catch (err) {
        toast.error('Erro de conexão, caso persista, contate o administrador')
      }
    }

    LoadConsultant()
  }, [id])

  return (
    <S.Wrapper>
      {consultant && (
        <S.FormWrapper>
          <S.TextFieldWrapper>
            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Nome Completo" value={consultant.name} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Identificação"
                  value={consultant.identification}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Email" value={consultant.email} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="CPF/CNPJ" value={consultant.document} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Contato 1" value={consultant.contact1} />
              </S.TextWrapper>
              {consultant.contact2 && (
                <S.TextWrapper items={3}>
                  <TextField label="Contato 2" value={consultant.contact2} />
                </S.TextWrapper>
              )}
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Cep" value={consultant.Address.cep} />
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
                <TextField label="Cidade" value={consultant.Address.city} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Bairro"
                  value={consultant.Address.neighborhood}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Rua" value={consultant.Address.street} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Número" value={consultant.Address.number} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Complemento"
                  value={consultant.Address.complement}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Comissão" value={consultant.percentage} />
              </S.TextWrapper>
              <S.SelectWrapper>
                <S.Label>Franquia</S.Label>
                <S.Select>
                  <option value="none" selected disabled hidden>
                    Selecione
                  </option>
                  <option>Kevin - Moc</option>
                </S.Select>
              </S.SelectWrapper>
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
                Cancelar
              </Button>
              <Button size="large" background="green" radius="radius100">
                Atualizar
              </Button>
            </S.InlineWrapper>
          </S.TextFieldWrapper>
        </S.FormWrapper>
      )}
    </S.Wrapper>
  )
}

export default ShowConsultant
