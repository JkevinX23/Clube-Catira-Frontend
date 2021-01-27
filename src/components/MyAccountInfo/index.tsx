import { SyntheticEvent } from 'Types'
import * as S from './styles'
import { useState } from 'react'
import Button from 'components/Button'
import { postFile } from 'Context/Action/File'
import { updateAssociate } from 'Context/Action/Associates'
import { toast } from 'react-toastify'

export type MyAccountInfoProps = {
  img: string
  fantasy_name: string
  category: string
  contact: string
  city: string
  state: string
  street: string
  number: string
  neighborhood: string
  representative_name: string
  email: string
}

const MyAccountInfo = ({
  img,
  fantasy_name,
  category,
  contact,
  city,
  state,
  street,
  number,
  neighborhood,
  representative_name,
  email
}: MyAccountInfoProps) => {
  const [file, setFile] = useState<any>(null)
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >()

  function handleImageChange(e: SyntheticEvent) {
    e.preventDefault()
    if (window.FileReader) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        const file = e.target.files[0]
        const data = new FormData()
        data.append('file', e.target.files[0])
        setFile(data)
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  async function handleSubmit() {
    try {
      const { data } = await postFile(file)
      await updateAssociate({ file_id: data.id })
      toast.success('Logo atualizada com sucesso!')
    } catch (err) {
      console.log(err)
      toast.warn(
        'Algo de errado ocorreu, caso persista, contate o administrador do sistema.'
      )
    }
  }
  function handleCancel() {
    setFile(null)
    setImagePreviewUrl(null)
  }
  return (
    <S.Wrapper>
      <S.WrapperImage>
        <S.Image
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Unreachable code error
          src={imagePreviewUrl || img}
          role="img"
          aria-label={fantasy_name}
        />
        <input
          type="file"
          accept="image/*"
          name="file"
          id="file"
          className="inputfile"
          onChange={
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            (e) => handleImageChange(e)
          }
        />
        <label htmlFor="file">Trocar Logo</label>
      </S.WrapperImage>

      <S.WrapperInfo>
        <S.Title>Informações Comerciais</S.Title>
        <S.WrapperText>
          <p>{fantasy_name}</p>
          <p>{category}</p>
          <p>{contact}</p>
          <p>
            {city}/{state}
          </p>
          <p>
            {street}, {number}
          </p>
          <p>{neighborhood}</p>
        </S.WrapperText>

        <S.Title>Dados Pessoais</S.Title>
        <S.WrapperText>
          <p>{representative_name}</p>
          <p>{email}</p>
        </S.WrapperText>
        {file !== null && (
          <S.Buttons>
            <div>
              <Button
                size="xxsmall"
                background="orange"
                radius="radius100"
                onClick={() => handleSubmit()}
              >
                Salvar
              </Button>
            </div>
            <div>
              <Button
                size="xxsmall"
                background="black"
                radius="radius100"
                onClick={() => handleCancel()}
              >
                Cancelar
              </Button>
            </div>
          </S.Buttons>
        )}
      </S.WrapperInfo>
    </S.Wrapper>
  )
}

export default MyAccountInfo
