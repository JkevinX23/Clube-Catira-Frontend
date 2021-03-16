import Page from 'templates/Home'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Associate, Option, GetOfferProps } from 'Types'
import { getOffers } from 'Context/Action/Offer'

export default function HomeAssociado() {
  const router = useRouter()
  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
  }

  const client = props.client as Associate

  const [offers, setOffers] = useState<GetOfferProps[]>([
    {
      id: -1,
      title: 'Massagen',
      description: '1 sessao de massagem',
      value_offer: 0,
      consumer_cards: 1,
      quantity: 0,
      file_id: 1,
      associate_id: 5,
      File: {
        url: 'localhost:3334/files/7802614de6664e050f59f6e7b1f1c908.jpg',
        id: 1,
        path: '7802614de6664e050f59f6e7b1f1c908.jpg'
      },
      Associated: {
        id: 5,
        description: 'Essa é uma loja teste',
        fantasy_name: 'Gool',
        company_name: 'KEVIN LTDA',
        file_id: 1,
        category_id: 1,
        address_id: 31,
        Address: {
          id: 31,
          city: 'Montes Claros',
          state: 'MG'
        }
      }
    }
  ])
  const [citys, setCitys] = useState<Option[]>([
    { key: 0, value: 'Nenhuma cidade encontrada' }
  ])
  const [associates, setAssociates] = useState<Option[]>([
    { key: 0, value: 'Nenhum associado encontrado' }
  ])

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await getOffers()
        const offs: GetOfferProps[] = response.data
        setOffers(offs)
        const cits: Option[] = []
        const ass: Option[] = []

        offs.map((off: GetOfferProps) => {
          cits
            .map(function (e) {
              return e.key
            })
            .indexOf(off.Associated.Address.city) === -1 &&
            cits.push({
              value: off.Associated.Address.city,
              key: off.Associated.Address.city
            })

          ass
            .map(function (e) {
              return e.key
            })
            .indexOf(off.Associated.id) === -1 &&
            ass.push({
              value: off.Associated.fantasy_name,
              key: off.Associated.id
            })
        })

        setAssociates(ass)
        setCitys(cits)
      } catch (e) {
        console.log(e)
        toast.error(
          'Problema de conexão. Verifique sua internet. Caso persista, entre em contato com o administrador do sistema.'
        )
      }
    }
    if (process.browser) {
      switch (props.option) {
        case 1:
          router.push('/administrador')
          break
        case 2:
          router.push('/franquia')
          break
        case 3:
          router.push('/consultor')
          break
        case 4:
          loadOffers()
          break
      }
    }
  }, [props.option, router])

  return (
    <div>
      {props.signed && process.browser && props.option === 4 && (
        <Page
          HeaderProps={{
            associate: client && client.fantasy_name,
            credits: client && client.credit
          }}
          Products={offers.reverse()}
          Filters={{ associates, citys }}
        />
      )}
    </div>
  )
}
