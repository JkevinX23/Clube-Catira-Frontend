import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import CreateOfferAssociate from 'components/CreateOfferAssociate'
import Footer from 'components/Footer'
import * as S from './styles'

export type CreateOfferProps = {
  HeaderProps: AssociateHeaderProps
}

const CreateOffer = ({ HeaderProps }: CreateOfferProps) => {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <AssociateHeader
          associate={HeaderProps.associate}
          credits={HeaderProps.credits}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
      <S.WrapperContent>
        <CreateOfferAssociate />
      </S.WrapperContent>
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default CreateOffer
