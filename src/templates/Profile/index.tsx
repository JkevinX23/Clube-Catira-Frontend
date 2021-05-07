import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import TabProfile, { TabProfileProps } from 'components/TabProfile'
import * as S from './styles'

import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

export type MyProfileProps = {
  HeaderProps: AssociateHeaderProps
  Profile: TabProfileProps
}

const MyProfile = ({ HeaderProps, Profile }: MyProfileProps) => {
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
            <Typography color="textPrimary">Perfil</Typography>
          </Breadcrumbs>
        </S.Breadcrumbs>
      </S.WrapperBreadcrumbs>
      <S.WrapperCenter>
        <S.WrapperContent>
          {Profile && (
            <TabProfile
              img={Profile.img}
              fantasy_name={Profile.fantasy_name}
              category={Profile.category}
              contact={Profile.contact}
              city={Profile.city}
              state={Profile.state}
              street={Profile.street}
              number={Profile.number}
              neighborhood={Profile.neighborhood}
              representative_name={Profile.representative_name}
              email={Profile.email}
              site={Profile.site}
              instagram={Profile.instagram}
              facebook={Profile.facebook}
              description={Profile.description}
            />
          )}
        </S.WrapperContent>
      </S.WrapperCenter>

      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default MyProfile
