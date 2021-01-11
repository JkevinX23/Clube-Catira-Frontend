import AssociateHeader, {
  AssociateHeaderProps
} from 'components/AssociateHeader'
import AssociateMenu from 'components/AssociateMenu'
import Footer from 'components/Footer'
import { MyAccountInfoProps } from 'components/MyAccountInfo'
import TabProfile from 'components/TabProfile'
import * as S from './styles'

export type MyProfileProps = {
  HeaderProps: AssociateHeaderProps
  Profile: MyAccountInfoProps
}

const MyProfile = ({ HeaderProps, Profile }: MyProfileProps) => {
  console.log(Profile)
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
