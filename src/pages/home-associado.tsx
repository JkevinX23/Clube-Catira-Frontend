import Page from 'templates/Home'
import { ProdTypes } from 'utils/types'
import AuthContext from 'Context/Reduces/Auth'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Associate } from 'Types'
const produtos: ProdTypes[] = [
  {
    id: 1,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 1',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 2,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 2',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 3,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 3',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 4,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 3',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 5,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 3',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 6,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 3',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  },
  {
    id: 7,
    associate: 'Kevin',
    img:
      'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg',
    name: 'criação para rede social 3',
    title: '',
    value: '15000',
    state: 'MG',
    city: 'Montes Claros'
  }
]

export default function HomeAssociado() {
  const router = useRouter()
  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
    toast.info('Olá, realize seu login para continuar')
  }

  const client = props.client as Associate
  console.log(props)

  return (
    <Page
      HeaderProps={{
        associate: client && client.fantasy_name,
        credits: client && client.credit
      }}
      Products={produtos}
    />
  )
}
