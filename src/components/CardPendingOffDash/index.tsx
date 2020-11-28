import PendingAssociate, {
  PendingAssociateProps
} from 'components/PendingAssociate'
import * as S from './styles'

export type CardPendingOffDashProps = {
  associates: PendingAssociateProps[]
}

const CardPendingOffDash = ({ associates }: CardPendingOffDashProps) => (
  <S.Wrapper>
    <p>Ofertas Pendentes</p>
    {!!associates &&
      associates.map((associate, i) => (
        <PendingAssociate
          key={i}
          associate={associate.associate}
          franchise={associate.franchise}
        />
      ))}
  </S.Wrapper>
)

export default CardPendingOffDash
