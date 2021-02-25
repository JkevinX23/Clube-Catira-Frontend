import React, { useState } from 'react'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import * as S from './styles'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { resetPassword } from 'Context/Action/Recovery'

const RequestRecovery = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSubmit() {
    if (password.length < 6) {
      toast.warn('Sua senha deve ter pelo menos 6 dígitos')
      return
    }
    if (password !== confirmPassword) {
      setPassword('')
      setConfirmPassword('')
      toast.warn('As senhas não coincidem.')
      return
    }
    try {
      const query = window.location.search.substring(1)
      const [, token] = query.split('=')
      await resetPassword({ password, token })
      toast.success('Senha alterada com sucesso.')
      setTimeout(() => {
        Router.push('/sign-in')
      }, 2000)
      return
    } catch (e) {
      return
    }
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
          <strong>Muito bem, informe sua nova senha.</strong>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Sua senha de acesso"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              className="input"
              name="passwordConfirmation"
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <button
              className="buttom lb"
              type="button"
              onClick={() => handleSubmit()}
            >
              Confirmar
            </button>
          </form>
        </section>
      </S.WhatsSectionWrapper>

      <SociaisSection />
      <Footer />
    </S.Wrapper>
  )
}
export default RequestRecovery
