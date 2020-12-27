import PendingAssociate, {
  PendingAssociateProps
} from 'components/PendingAssociate'
import * as S from './styles'

export type CardPendingOffDashProps = {
  pending_offers: PendingAssociateProps[]
}

const CardPendingOffDash = ({ pending_offers }: CardPendingOffDashProps) => (
  <S.Wrapper>
    <S.Title>Ofertas Pendentes</S.Title>
    <S.Content>
      {pending_offers &&
        pending_offers.map((associate, i) => (
          <PendingAssociate
            key={i}
            id={associate.id}
            associated={associate.associated}
            franchise={associate.franchise}
          />
        ))}
    </S.Content>

    <S.Sub>Ver Mais</S.Sub>
  </S.Wrapper>
)

export default CardPendingOffDash
