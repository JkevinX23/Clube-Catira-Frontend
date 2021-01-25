import { SyntheticEvent } from 'Types'
import * as S from './styles'
import { useState } from 'react'

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
  const [file, setFile] = useState<any>()
  const [imagePreviewUrl, setImagePreviewUrl] = useState<
    string | ArrayBuffer | null
  >('/img/preview-clube.png')

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
  return (
    <S.Wrapper>
      <S.WrapperImage>
        <S.Image src={img} role="img" aria-label={fantasy_name} />
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
        {/* <Button size="xxsmall" background="green" radius="radius100"></Button> */}
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
      </S.WrapperInfo>
    </S.Wrapper>
  )
}

export default MyAccountInfo
