import Button from 'components/Button'
import { updateAssociate } from 'Context/Action/Associates'
import { useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './styles'

type descProps = {
  site?: string
  facebook?: string
  instagram?: string
  description: string
}

const MyAccountDesc = (social: descProps) => {
  const [site, setSite] = useState(social.site)
  const [facebook, setFacebook] = useState(social.facebook)
  const [instagram, setInstagram] = useState(social.instagram)
  const [description, setDescription] = useState(social.description)

  async function handleChange() {
    try {
      await updateAssociate({ site, facebook, instagram, description })
      toast.success('Dados atualizados com sucesso!')
    } catch (err) {
      console.log(err)
      toast.warn(
        'Algo de errado ocorreu ao atualizar seus dados. Caso persista, contate o administrador do sistema.'
      )
    }
  }

  return (
    <S.Wrapper>
      <S.WrapperField>
        <div>
          <S.Label>Site</S.Label>
          <S.Input value={site} onChange={(e) => setSite(e.target.value)} />
        </div>
        <div>
          <S.Label>Facebook</S.Label>
          <S.Input
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div>
          <S.Label>Instagram</S.Label>
          <S.Input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
      </S.WrapperField>

      <S.WrapperField>
        <S.WArea>
          <S.Label>Sobre a empresa</S.Label>
          <S.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.WArea>
      </S.WrapperField>

      <S.Buttons>
        <Button
          background="green"
          size="xxsmall"
          radius="radius100"
          onClick={() => handleChange()}
        >
          Atualizar
        </Button>
        <Button background="white" size="xxsmall" radius="radius100">
          Cancelar
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default MyAccountDesc
