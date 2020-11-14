import * as S from './styles'
import { User as UsersIcon } from 'styled-icons/fa-solid'
import { Mail as MailIcon } from 'styled-icons/entypo'

import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from 'styled-icons/boxicons-logos'
const SociaisSection = () => (
  <S.Wrapper>
    <S.ContainerWrapper>
      <S.IconWrapper>
        <UsersIcon />
      </S.IconWrapper>

      <S.IconWrapper>
        <MailIcon />
      </S.IconWrapper>

      <S.IconWrapper>
        <FacebookIcon />
      </S.IconWrapper>

      <S.IconWrapper>
        <InstagramIcon />
      </S.IconWrapper>
    </S.ContainerWrapper>
  </S.Wrapper>
)

export default SociaisSection
