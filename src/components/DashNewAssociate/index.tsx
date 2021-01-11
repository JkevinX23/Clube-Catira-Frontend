import { updateAssociateAdmin } from 'Context/Action/Associates'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as S from './styles'

export type DashNewAssociateProps = {
  associates: Associate[]
}

type Associate = {
  id: number
  fantasy_name: string
}

const DashNewAssociate = ({ associates }: DashNewAssociateProps) => {
  const [ass, setAss] = useState(associates)

  useEffect(() => {
    setAss(associates)
  }, [associates])

  async function handleActive(id: number) {
    try {
      await updateAssociateAdmin({ id, status: 1 })
      const filtered = ass.filter(function (el) {
        return el.id != id
      })
      setAss(filtered)
      toast.success('Associado ativado com sucesso!')
    } catch (err) {
      console.log(err)
      toast.warn('Algo de errado ocorreu.')
    }
  }

  return (
    <S.Wrapper>
      <div>
        <S.Title>Novos Associados</S.Title>
        <S.WrapperTable>
          <S.Table>
            <S.Tr>
              <S.Th>REF.</S.Th>
              <S.Th>NOME</S.Th>
              <S.Th>AÇÃO</S.Th>
            </S.Tr>
            <>
              {ass &&
                ass.map((val, i) => (
                  <S.Tr key={i}>
                    <S.Td>{val.id}</S.Td>
                    <S.Td>{val.fantasy_name}</S.Td>
                    <S.Td onClick={() => handleActive(val.id)}>Ativar</S.Td>
                  </S.Tr>
                ))}
            </>

            <S.TFoot>
              <S.Tr>
                <S.Th colSpan={3}> Ver mais </S.Th>
              </S.Tr>
            </S.TFoot>
          </S.Table>
        </S.WrapperTable>
      </div>
    </S.Wrapper>
  )
}

export default DashNewAssociate
