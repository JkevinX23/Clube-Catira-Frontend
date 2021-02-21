import HeaderDash from 'components/HeaderFranchise'
import AssociatesTable from '../../TablesFranchise/Associates'
import Footer from 'components/Footer'
import { HomeAdminProps } from 'Types'
import * as S from './styles'

import Sidebar from 'components/Franquia/Sidebar'
import CreateAssociate from 'templates/CreateAssociate'
import { useEffect, useState } from 'react'
import Button from 'components/Button'
import ShowAssociate from 'templates/Show/Franchise/Associate'

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
          {selector === 1 ? (
            <Button
              radius="radius100"
              background="green"
              onClick={() => setSelector(2)}
            >
              Cadastrar novo associado
            </Button>
          ) : selector === 2 ? (
            <Button
              radius="radius100"
              background="green"
              onClick={() => setSelector(1)}
            >
              Gerenciar Associados
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
        {selector === 2 ? (
          <S.CreateFranchise>
            <CreateAssociate />
          </S.CreateFranchise>
        ) : selector === 1 ? (
          <S.Table>
            <AssociatesTable setId={setId} />
          </S.Table>
        ) : (
          <S.CreateFranchise>
            <ShowAssociate id={id} />
          </S.CreateFranchise>
        )}
      </S.WrapperContent>
      <Sidebar />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}

export default AssociatesAdmin
