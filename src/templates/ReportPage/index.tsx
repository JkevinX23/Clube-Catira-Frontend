import { useRouter } from 'next/router'
import { generateReport } from 'Context/Action/Reports'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { GetAdminReport } from 'Types'
import { FormatCurrency, FormatDateByIntl } from 'utils/Masks'

export default function ReportAdminPage() {
  const router = useRouter()
  const startDate = router.query.dateInit as string
  const endDate = router.query.dateEnd as string
  const [payload, setPayload] = useState<any>(null)

  useEffect(() => {
    async function loadReport() {
      try {
        const { data } = await generateReport({
          dateInit: startDate,
          dateEnd: endDate
        })
        console.log(data)
        setPayload(data)
      } catch (err) {
        toast.warn('Algo de errado ocorreu.')
      }
    }
    loadReport()
  }, [startDate, endDate])

  return (
    <S.Wrapper>
      {payload !== null && (
        <S.Container>
          <S.Button>
            <button onClick={() => window.print()}>Imprimir</button>
          </S.Button>
          <S.Title>
            RELATÓRIO DO DIA {FormatDateByIntl(startDate)} AO DIA{' '}
            {FormatDateByIntl(endDate)}
          </S.Title>
          <S.SubTitle>
            Foram pagas {(payload as GetAdminReport).qtdTransacoes} catiras.
            Gerando um total líquido de{' '}
            {FormatCurrency((payload as GetAdminReport).totalLiquido)} para as
            franquias.
          </S.SubTitle>
          <S.SubTitle>Constam os seguintes repasses:</S.SubTitle>
          <S.Topic>Franquias</S.Topic>
          <S.Table>
            <tr>
              <th>Franquia (ID - nome)</th>
              <th>Qtd. Catiras Pagas</th>
              <th>Total arrecadado</th>
              <th>Porcentagem</th>
              <th>Fatura gerada</th>
            </tr>
            {(payload as GetAdminReport).franquias.map((franquia) => {
              return (
                <tr key={franquia.Franchise}>
                  <td>{franquia.Franchise}</td>
                  <td>{franquia.QtdTransactions}</td>
                  <td>{FormatCurrency(franquia.GanhosLiquido)}</td>
                  <td>{franquia.porcentagem}%</td>
                  <td>{FormatCurrency(franquia.fatura)}</td>
                </tr>
              )
            })}
            <td colSpan={5}>
              <S.Paragraph>
                TOTAL A RECEBER DAS FRANQUIAS:{' '}
                {FormatCurrency(
                  (payload as GetAdminReport).franquias.reduce(
                    (c, b) => c + b.fatura,
                    0
                  )
                )}
              </S.Paragraph>
            </td>
          </S.Table>
          <S.Topic>Detalhamento de repasses por Franquia</S.Topic>
          {(payload as GetAdminReport).franquias.map((franquia) => (
            <S.MapWrapper key={franquia.Franchise}>
              <S.Table key={franquia.Franchise}>
                <tr>
                  <th colSpan={4}>{franquia.Franchise}</th>
                </tr>
                <tr>
                  <th>Consultor</th>
                  <th>Total Gerado</th>
                  <th>Porcentagem</th>
                  <th>Comissão</th>
                </tr>
                {franquia.detalhesConsultor.map((consultor) => (
                  <tr key={consultor.Consultor}>
                    <td>{consultor.Consultor}</td>
                    <td>{FormatCurrency(consultor.totalLiquidoTransacoes)}</td>
                    <td>{consultor.porcentagem}</td>
                    <td>{FormatCurrency(consultor.comissao)}</td>
                  </tr>
                ))}
                <td colSpan={4}>
                  <S.Paragraph>
                    TOTAL ARRECADADO:{' '}
                    {FormatCurrency(
                      franquia.detalhesConsultor.reduce(
                        (c, b) => c + b.totalLiquidoTransacoes,
                        0
                      )
                    )}
                  </S.Paragraph>
                  <S.Paragraph>
                    TOTAL A REPASSAR AOS CONSULTORES:{' '}
                    {FormatCurrency(
                      franquia.detalhesConsultor.reduce(
                        (c, b) => c + b.comissao,
                        0
                      )
                    )}
                  </S.Paragraph>
                  <S.Paragraph>
                    TOTAL A REPASSAR A FRANQUEADORA:
                    {FormatCurrency(
                      (franquia.detalhesConsultor.reduce(
                        (c, b) => c + b.totalLiquidoTransacoes,
                        0
                      ) *
                        franquia.porcentagem) /
                        100
                    )}
                  </S.Paragraph>
                </td>
              </S.Table>
            </S.MapWrapper>
          ))}

          <S.Topic>Detalhamento das transações</S.Topic>
          {(payload as GetAdminReport).franquias.map((franquia) =>
            franquia.detalhesConsultor.map((consultor) => (
              <S.Table key={consultor.Consultor}>
                <tr>
                  <th colSpan={6}>Franquia: {franquia.Franchise}</th>
                </tr>
                <tr>
                  <th colSpan={6}>Consultor: {consultor.Consultor}</th>
                </tr>
                <tr>
                  <th>Transação</th>
                  <th>Comprador</th>
                  <th>Vendedor</th>
                  <th>Oferta</th>
                  <th>Data</th>
                  <th>Fatura Paga</th>
                </tr>
                {consultor.transacoes.map((transacoes) => (
                  <tr key={transacoes.id}>
                    <td> {transacoes.id} </td>
                    <td> {transacoes.comprador} </td>
                    <td> {transacoes.vendedor} </td>
                    <td>{transacoes.oferta}</td>
                    <td>{FormatDateByIntl(transacoes.data)}</td>
                    <td>{FormatCurrency(transacoes.valor)}</td>
                  </tr>
                ))}
              </S.Table>
            ))
          )}
          {/* <S.Paragraph>OFERTAS ATIVAS NO PERÍODO: 22 </S.Paragraph>
          <S.Paragraph>QUANTIDADE DE TRANSAÇÕES: 15</S.Paragraph>
          <S.Paragraph>FATURA GERADA: R$250,25</S.Paragraph>
          <S.Paragraph>TOTAL MOVIMENTADO: CTZ: 13.252,50</S.Paragraph> */}
        </S.Container>
      )}
    </S.Wrapper>
  )
}
