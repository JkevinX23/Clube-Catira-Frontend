import * as S from './styles'
import BackToTop from 'react-back-to-top'
import { UpArrowCircle as UpIcon } from 'styled-icons/boxicons-regular'
const BackToTopComponent = () => {
  return (
    <S.Wrapper>
      <BackToTop offsetTop={0} step={50} isPercent={false}>
        <UpIcon />
      </BackToTop>
    </S.Wrapper>
  )
}
export default BackToTopComponent
