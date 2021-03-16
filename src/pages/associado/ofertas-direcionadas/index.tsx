import Page from 'templates/Home'
import AuthContext from 'Context/Reduces/Auth'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { Associate, Option, GetOfferProps } from 'Types'
import { getDirectOffers } from 'Context/Action/Offer'

export default function OfertasDirecionadas() {
  const router = useRouter()
  const props = useContext(AuthContext)
  if (!props.signed) {
    if (process.browser) {
      router.push('/sign-in')
    }
  }

  const client = props.client as Associate

  const [offers, setOffers] = useState<GetOfferProps[]>([])
  const [citys, setCitys] = useState<Option[]>([
    { key: 0, value: 'Nenhuma cidade encontrada' }
  ])
  const [associates, setAssociates] = useState<Option[]>([
    { key: 0, value: 'Nenhum associado encontrado' }
  ])

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await getDirectOffers()
        const offs: GetOfferProps[] = response.data.reverse()
        setOffers(offs)
        const cits: Option[] = []
        const ass: Option[] = []

        offs.map((off: GetOfferProps) => {
          cits
            .map(function (e) {
              return e.key
            })
            .indexOf(off.Associated.Address.id) === -1 &&
            cits.push({
              value: off.Associated.Address.city,
              key: off.Associated.Address.id
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
          Products={offers}
          Filters={{ associates, citys }}
          isDirect
        />
      )}
    </div>
  )
}
