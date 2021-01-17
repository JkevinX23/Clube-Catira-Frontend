import PendingAssociate, {
  PendingAssociateProps
} from 'components/PendingAssociate'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { putOptionOffer } from 'Context/Action/Offer'
import { toast } from 'react-toastify'
import Link from 'next/link'

export type CardPendingOffDashProps = {
  pending_offers: PendingAssociateProps[]
}

const CardPendingOffDash = ({ pending_offers }: CardPendingOffDashProps) => {
  const [offs, setOffs] = useState(pending_offers)

  useEffect(() => {
    setOffs(pending_offers)
  }, [pending_offers])

  async function handleOption(id: number, option: number) {
    try {
      await putOptionOffer({ offer_id: id, status: option })
      const filtered = offs.filter(function (el) {
        return el.id != id
      })
      setOffs(filtered)
      if (option === 1) {
        toast.success('Oferta APROVADA com sucesso!')
      }

      if (option === 2) {
        toast.success('Oferta SUSPENSA com sucesso!')
      }
    } catch (err) {
      console.log(err)
      toast.warn('Algo de errado ocorreu.')
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Ofertas Pendentes</S.Title>
      <S.Content>
        {offs &&
          offs.map((associate, i) => (
            <PendingAssociate
              key={i}
              id={associate.id}
              associated={associate.associated}
              franchise={associate.franchise}
              handleOption={handleOption}
            />
          ))}
      </S.Content>
      <Link href="/administrador/ofertas">
        <S.Sub>Ver Mais</S.Sub>
      </Link>
    </S.Wrapper>
  )
}

export default CardPendingOffDash
