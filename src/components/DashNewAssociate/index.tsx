import * as S from './styles'

export type DashNewAssociateProps = {
  associates: Associate[]
}

type Associate = {
  id: number
  fantasy_name: string
}

const DashNewAssociate = ({ associates }: DashNewAssociateProps) => (
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
            {associates &&
              associates.map((val, i) => (
                <S.Tr key={i}>
                  <S.Td>{val.id}</S.Td>
                  <S.Td>{val.fantasy_name}</S.Td>
                  <S.Td>Ativar</S.Td>
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

export default DashNewAssociate
