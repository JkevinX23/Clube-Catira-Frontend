import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import CreateOfferAssociate from 'components/CreateOfferAssociate'
import Footer from 'components/Footer'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
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
          limit={HeaderProps.limit}
        />
      </S.WrapperHeader>
      <S.WrapperMenu>
        <AssociateMenu />
      </S.WrapperMenu>
      <S.WrapperBreadcrumbs>
        <S.Breadcrumbs>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="large" />}
            aria-label="breadcrumb"
          >
            <Link href="/home-associado">Home</Link>
            <Typography color="textPrimary">Criar Ofertas</Typography>
          </Breadcrumbs>
        </S.Breadcrumbs>
      </S.WrapperBreadcrumbs>
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
