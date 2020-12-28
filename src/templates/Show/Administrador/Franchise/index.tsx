import Button from 'components/Button'
import TextField from 'components/TextField'
import { showFranchise } from 'Context/Action/Franchise'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Franquia } from 'Types'
import * as S from './styles'

type props = {
  id: number
}

const ShowFranchise = ({ id }: props) => {
  const [franchise, setFranchise] = useState<Franquia>()

  useEffect(() => {
    async function LoadFranchise() {
      try {
        const { data } = await showFranchise(id)
        setFranchise(data)
      } catch (err) {
        toast.error('Erro de conexão, caso persista, contate o administrador')
      }
    }

    LoadFranchise()
  }, [id])

  return (
    <S.Wrapper>
      {franchise && (
        <S.FormWrapper>
          <S.TextFieldWrapper>
            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="E-mail" value={franchise.email} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Nome Franquia" value={franchise.name} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="CPF/CNPJ" value={franchise.document} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Razão Social"
                  value={franchise.company_name}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="IE" value={franchise.ie} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="IM" value={franchise.im} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Cep" value={franchise.address?.cep} />
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
                <TextField label="Cidade" value={franchise.address?.city} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Bairro"
                  value={franchise.address?.neighborhood}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Rua" value={franchise.address?.street} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Número" value={franchise.address?.number} />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Complemento"
                  value={franchise.address?.complement}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Telefone Fixo" value={franchise.contact1} />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Telefone Celular"
                  value={franchise.contact2}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="E-mail Pagseguro"
                  value={franchise.getway_email}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Token Pagseguro"
                  value={franchise.getway_token}
                />
              </S.TextWrapper>
              <S.TextWrapper items={3}>
                <TextField
                  label="Percentual Comissão"
                  value={franchise.percentage}
                />
              </S.TextWrapper>
            </S.InlineWrapper>

            <S.InlineWrapper>
              <S.TextWrapper items={3}>
                <TextField label="Nova Senha" />
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
                ATUALIZAR
              </Button>
              <Button size="large" background="green" radius="radius100">
                CANCELAR
              </Button>
            </S.InlineWrapper>
          </S.TextFieldWrapper>
        </S.FormWrapper>
      )}
    </S.Wrapper>
  )
}

export default ShowFranchise
