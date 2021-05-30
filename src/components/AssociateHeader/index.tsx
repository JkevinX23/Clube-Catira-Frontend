import * as S from './styles'
import Link from 'next/link'
import { Profile as ProfileIcon } from '@styled-icons/icomoon'
import { Exit as ExitIcon } from '@styled-icons/boxicons-regular'
import { useContext, useEffect, useState } from 'react'
import AuthContext from 'Context/Reduces/Auth'
import { FormatCurrency } from 'utils/Masks'
import ReactTooltip from 'react-tooltip'
import Image from 'next/image'

export type AssociateHeaderProps = {
  associate: string
  credits: number
  limit: number
}
const AssociateHeader = ({
  associate,
  credits,
  limit
}: AssociateHeaderProps) => {
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
        <a
          data-for="main"
          data-tip="Informações sobre o limite de compras"
          data-iscapture="true"
        >
          <S.Box id="main">
            <p>Saldo</p>
            <S.Value isNegative={isNegative}>
              CT$ {FormatCurrency(credits)}
            </S.Value>
          </S.Box>
        </a>
        {isNegative ? (
          <ReactTooltip
            className="tooltip"
            id="main"
            type="error"
            effect="solid"
            place="bottom"
            multiline
          >
            <S.SpanTolltip>
              <b>Seu saldo está negativo.</b>
              <br /> Mas não se preocupe, você tem o limite de compras de{' '}
              <b>CT${FormatCurrency(limit)}</b>
            </S.SpanTolltip>
          </ReactTooltip>
        ) : (
          <ReactTooltip
            className="tooltip"
            id="main"
            type="success"
            effect="solid"
            place="bottom"
            multiline
          >
            <S.SpanTolltip>
              <b>Seu saldo está positivo.</b>
              <br /> E além do seu saldo, você possui uma margem de crédito para
              <b> comprar </b> com a gente de até:
              <b> CT${FormatCurrency(limit)}</b>
            </S.SpanTolltip>
          </ReactTooltip>
        )}

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

        <Link href="/pdv">
          <S.MenuPDV>
            <Image
              src="/img/catira-icon-72x72.png"
              alt="PDV"
              width={28}
              height={28}
            />
            <span>PDV</span>
          </S.MenuPDV>
        </Link>
      </S.Row>
    </S.Wrapper>
  )
}

export default AssociateHeader
