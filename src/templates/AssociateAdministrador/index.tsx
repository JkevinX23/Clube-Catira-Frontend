import HeaderDash from 'components/HeaderDash'
import AssociatesTable from '../TablesAdmin/Associates'

import BasicTable from '../TablesAdmin/Associates/BasicTable'
import EssentialTable from '../TablesAdmin/Associates/EssentialTable'
import CompleteTable from '../TablesAdmin/Associates/FullTable'

import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import SidebarAdmin from 'components/Sidebar'
import CreateAssociate from 'templates/CreateAssociate'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import ShowAssociate from 'templates/Show/Administrador/Associate'

const AssociatesAdmin = ({ name, role }: HomeAdminProps) => {
  const [selector, setSelector] = useState(1)
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    if (id !== 0) {
      setSelector(3)
    }
  }, [id])

  function handleChange() {
    setSelector(1)
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
            onClick={() => setSelector(1)}
          >
            Tabela Basica
          </Button>
          <Button
            radius="radius100"
            background="black"
            onClick={() => setSelector(2)}
          >
            Tabela Essencial
          </Button>
          <Button
            radius="radius100"
            background="black"
            onClick={() => setSelector(3)}
          >
            Tabela Completa
          </Button>
          {selector === 1 || selector === 2 || selector === 3 ? (
            <Button
              radius="radius100"
              background="green"
              onClick={() => setSelector(4)}
            >
              Cadastrar novo associado
            </Button>
          ) : (
            <Button
              radius="radius100"
              background="green"
              onClick={handleChange}
            >
              Voltar
            </Button>
          )}
        </S.ButtonChange>
        {selector === 4 ? (
          <S.CreateFranchise>
            <CreateAssociate />
          </S.CreateFranchise>
        ) : selector === 1 ? (
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
          <S.CreateFranchise>
            <ShowAssociate id={id} />
          </S.CreateFranchise>
        )}
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default AssociatesAdmin
