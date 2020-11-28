import PendingAssociate, {
  PendingAssociateProps
} from 'components/PendingAssociate'
import * as S from './styles'

export type CardPendingOffDashProps = {
  associates: PendingAssociateProps[]
}

const CardPendingOffDash = ({ associates }: CardPendingOffDashProps) => (
  <S.Wrapper>
    <S.Title>Ofertas Pendentes</S.Title>
    <S.Content>
      {!!associates &&
        associates.map((associate, i) => (
          <PendingAssociate
            key={i}
            associate={associate.associate}
            franchise={associate.franchise}
          />
        ))}
    </S.Content>

    <S.Sub>Ver Mais</S.Sub>
  </S.Wrapper>
)

export default CardPendingOffDash
