import Button from 'components/Button'
import { updateAssociate } from 'Context/Action/Associates'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './styles'

const MyAccountSeg = () => {
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSubmit() {
    try {
      if (password.length < 6) {
        toast.warn('Sua senha deve conter pelo menos 6 caracteres')
        return
      }
      if (!oldPassword) {
        toast.warn('Senha atual Obrigatória')
        return
      }
      if (password !== confirmPassword) {
        toast.warn('Suas senhas não coincidem, tente novamente!')
        return
      }
      await updateAssociate({ oldPassword, password })
      toast.success('Senha alterada com sucesso!')
    } catch (err) {
      console.log(err)
      toast.warn('Algo deu errado, tente novamente.')
    }
  }
  return (
    <S.Wrapper>
      <S.WrapperField>
        <S.WrapperRow>
          <S.Label>Senha Atual</S.Label>
          <S.Input
            type="password"
            placeholder="*********"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </S.WrapperRow>
        <S.WrapperRow>
          <S.Label>Nova Senha</S.Label>
          <S.Input
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.WrapperRow>
        <S.WrapperRow>
          <S.Label>Confirmar Nova Senha</S.Label>
          <S.Input
            type="password"
            placeholder="*********"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </S.WrapperRow>
      </S.WrapperField>

      <Button
        size="xxsmall"
        background="green"
        radius="radius100"
        onClick={() => handleSubmit()}
      >
        Atualizar
      </Button>
    </S.Wrapper>
  )
}

export default MyAccountSeg
