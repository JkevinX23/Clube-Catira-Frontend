import HeaderDash from 'components/Consultant/HeaderDash'
import AssociatesTable from 'templates/TablesConsultant/Associates'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import BasicTable from '../../TablesConsultant/Associates/BasicTable'
import EssentialTable from '../../TablesConsultant/Associates/EssentialTable'
import CompleteTable from '../../TablesConsultant/Associates/FullTable'

import Sidebar from 'components/Consultant/Sidebar'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import ShowAssociate from 'templates/Show/Consultant/Associate'

const AssociatesConsultant = ({ name, role }: HomeAdminProps) => {
  const [selector, setSelector] = useState(1)
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    if (id !== 0) {
      setSelector(4)
    }
  }, [id])

  function handleChange(value: number) {
    setSelector(value)
    setId(0)
  }

  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.ButtonChange>
          <Button
            radius="radius100"
            background="black"
            onClick={() => handleChange(1)}
          >
            Tabela Basica
          </Button>
          <Button
            radius="radius100"
            background="black"
            onClick={() => handleChange(2)}
          >
            Tabela Essencial
          </Button>
          <Button
            radius="radius100"
            background="black"
            onClick={() => handleChange(3)}
          >
            Tabela Completa
          </Button>
          {selector !== 1 && selector !== 2 && selector !== 3 && (
            <Button
              radius="radius100"
              background="green"
              onClick={() => handleChange(1)}
            >
              Voltar
            </Button>
          )}
        </S.ButtonChange>
        {selector === 1 ? (
          <S.Table>
            <BasicTable setId={setId} />
          </S.Table>
        ) : selector === 2 ? (
          <S.Table>
            <EssentialTable setId={setId} />
          </S.Table>
        ) : selector === 3 ? (
          <S.Table>
            <CompleteTable setId={setId} />
          </S.Table>
        ) : (
          id !== 0 && (
            <S.CreateFranchise>
              <ShowAssociate id={id} />
            </S.CreateFranchise>
          )
        )}
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default AssociatesConsultant
