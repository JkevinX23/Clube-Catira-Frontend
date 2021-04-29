import * as S from './styles'
import Link from 'next/link'
import { Profile as ProfileIcon } from '@styled-icons/icomoon'
import { Exit as ExitIcon } from '@styled-icons/boxicons-regular'
import { useContext, useEffect, useState } from 'react'
import AuthContext from 'Context/Reduces/Auth'

export type AssociateHeaderProps = {
  associate: string
  credits: number
}
const AssociateHeader = ({ associate, credits }: AssociateHeaderProps) => {
  const { signOut } = useContext(AuthContext)

  function handleLogout() {
    signOut()
  }

  const [isNegative, setIsNegative] = useState(false)
  useEffect(() => {
    credits < 0 ? setIsNegative(true) : setIsNegative(false)
  }, [credits])
  return (
    <S.Wrapper>
      <S.Name>Bem Vindo {associate}</S.Name>
      <S.Row>
        <S.Box>
          <p>Créditos</p>
          <S.Value isNegative={isNegative}>CT${credits}</S.Value>
        </S.Box>
        <Link href="/associado/perfil">
          <S.Icon>
            <ProfileIcon />
            <span>Perfil</span>
          </S.Icon>
        </Link>

        <S.Icon onClick={() => handleLogout()}>
          <ExitIcon />
          <span>Sair</span>
        </S.Icon>
      </S.Row>
    </S.Wrapper>
  )
}

export default AssociateHeader
