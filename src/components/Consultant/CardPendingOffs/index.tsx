import PendingAssociate, {
  PendingAssociateProps
} from 'components/Consultant/PendingAssociate'
import * as S from './styles'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export type CardPendingOffDashProps = {
  pending_offers: PendingAssociateProps[]
}

const CardPendingOffDash = ({ pending_offers }: CardPendingOffDashProps) => {
  const [offs, setOffs] = useState(pending_offers)

  useEffect(() => {
    setOffs(pending_offers)
  }, [pending_offers])

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
              offer={associate.offer}
            />
          ))}
      </S.Content>
      <Link href="/consultor/ofertas">
        <S.Sub>Ver Mais</S.Sub>
      </Link>
    </S.Wrapper>
  )
}

export default CardPendingOffDash
