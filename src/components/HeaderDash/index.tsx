import { useState } from 'react'
import Logo from 'components/Logo'
import * as S from './styles'
import {
  ArrowIosDownwardOutline as DownIcon,
  ArrowIosUpwardOutline as UpIcon
} from '@styled-icons/evaicons-outline'
import { Profile as ProfileIcon } from '@styled-icons/icomoon'
import { Exit as ExitIcon } from '@styled-icons/boxicons-regular'

export type HeaderDashProps = {
  name: string
  role: string
}

const HeaderDash = ({ name, role }: HeaderDashProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Content>
        <div>
          <S.Name>{name}</S.Name>
          <S.Role>{role}</S.Role>
        </div>
        <S.Icon>
          {isOpen ? (
            <UpIcon onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <DownIcon onClick={() => setIsOpen(!isOpen)} />
          )}
        </S.Icon>
      </S.Content>
      {isOpen && (
        <S.Options>
          <li>
            <S.Icon>
              <ProfileIcon />
            </S.Icon>
            Perfil
          </li>
          <li>
            <S.Icon>
              <ExitIcon />
            </S.Icon>
            Sair
          </li>
        </S.Options>
      )}
    </S.Wrapper>
  )
}

export default HeaderDash
