import React, { useState, useEffect, useRef } from 'react'
import AssociateSection from 'components/AssociateSection'
// import BackToTop from 'components/BackToTop'
import Footer from 'components/Footer'
import HomeSection from 'components/HomeSection'
import HowWorks from 'components/HowWorks'
import Menu from 'components/Menu'
import SociaisSection from 'components/SociaisSection'
import WhatsSection from 'components/WhatsSection'
import * as S from './styles'

type props = {
  preSection?: string
}

const Main = ({ preSection }: props) => {
  const [scrollY, setScrollY] = useState(0)
  const [section, setSection] = useState(preSection || '')
  const sectionHomeRef = useRef<null | HTMLDivElement>(null)
  const sectionOClubeRef = useRef<null | HTMLDivElement>(null)
  const sectionComoFuncionaRef = useRef<null | HTMLDivElement>(null)

  useEffect

  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  }, [])

  useEffect(() => {
    switch (section) {
      case 'sectionHomeRef':
        sectionHomeRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        return
      case 'sectionOClubeRef':
        sectionOClubeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
        return
      case 'sectionComoFuncionaRef':
        sectionComoFuncionaRef.current?.scrollIntoView({
          behavior: 'smooth'
        })
        return
    }
  }, [section])

  function handleChange(newValue: string) {
    setSection(newValue)
  }

  return (
    <S.Wrapper>
      {/* <S.BackToTopWrapper><BackToTop /></S.BackToTopWrapper> */}
      <S.SobrepositionWrapper>
        <S.MenuWrapper position={scrollY}>
          <Menu handleChange={handleChange} />
        </S.MenuWrapper>
        <S.HomeSectionWrapper id="home-section" ref={sectionHomeRef}>
          <HomeSection />
        </S.HomeSectionWrapper>
      </S.SobrepositionWrapper>
      <S.WhatsSectionWrapper ref={sectionOClubeRef}>
        <WhatsSection />
      </S.WhatsSectionWrapper>
      <S.HowWorksWrapper ref={sectionComoFuncionaRef}>
        <HowWorks />
      </S.HowWorksWrapper>
      <AssociateSection />
      <SociaisSection />
      <Footer />
    </S.Wrapper>
  )
}
export default Main
