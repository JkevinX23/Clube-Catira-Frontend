import React, { useState, useRef, useEffect, useContext } from 'react'
import { useField } from '@rocketseat/unform'
import api from '../../services/api'
import AuthContext from 'Context/Reduces/Auth'

import { Container } from './styles'

export default function ImageInput({ cat }) {
  const props = useContext(AuthContext)
  const { defaultValue, registerField } = useField('avatar')
  const [file, setFile] = useState(defaultValue && defaultValue.id)
  const [preview, setPreview] = useState(defaultValue && defaultValue.url)
  const [avatar, setAvatar] = useState(null)

  const ref = useRef()

  useEffect(() => {
    console.log(props.client.img)
    props &&
      props.client &&
      props.client.img !== null &&
      setAvatar({ url: props.client.img })
  }, [props])

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file'
      })
    }
  }, [ref, registerField])

  async function handleChange(e) {
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data
    setFile(id)
    setPreview(url)
    cat && cat.setFile && cat.setFile(id)
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            (avatar && avatar.url) ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFXraD7oFg2-EpsbfYH9id9v6c5O-zIP27vgGe5N5hp4mGcd29&usqp=CAU'
          }
          alt="avatar"
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  )
}
