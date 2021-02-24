import React, { useState, useEffect, useRef } from 'react'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import * as S from './styles'
import Link from 'next/link'
import { recoveryAccount } from 'Context/Action/RecoveryPassword'
import { toast } from 'react-toastify'

const RequestRecovery = () => {
  const [email, setEmail] = useState('')

  function handleSubmit() {
    try {
      recoveryAccount(email)
    } catch (e) {
      return
    }
    toast.success(
      'Caso o email seja válido, você receberá um link para restaurar sua senha.'
    )
    return
  }

  return (
    <S.Wrapper>
      <S.SobrepositionWrapper>
        <S.MenuWrapper>
          <Menu />
        </S.MenuWrapper>
      </S.SobrepositionWrapper>
      <S.WhatsSectionWrapper>
        <section className="login">
          <strong>Não se preocupe, vamos recuperar sua senha!</strong>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="buttom lb"
              type="button"
              onClick={() => handleSubmit()}
            >
              Confirmar
            </button>
            <Link href="/associar-se"> Criar conta </Link>
          </form>
        </section>
      </S.WhatsSectionWrapper>

      <SociaisSection />
      <Footer />
    </S.Wrapper>
  )
}
export default RequestRecovery
