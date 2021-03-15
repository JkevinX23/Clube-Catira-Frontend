import { useRouter } from 'next/router'
import { generateReport } from 'Context/Action/Reports'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { GetFranchiseReport } from 'Types'
import { FormatCurrency, FormatDateByIntl } from 'utils/Masks'

export default function ReportFranchisePage() {
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
            Foram pagas {(payload as GetFranchiseReport).report.QtdTransactions}{' '}
            catiras. Gerando um total líquido de{' '}
            {FormatCurrency(
              (payload as GetFranchiseReport).report.GanhosLiquido
            )}{' '}
            para sua franquia.
          </S.SubTitle>
          <S.SubTitle>
            Sua fatura nesse periodo é de:{' '}
            {FormatCurrency((payload as GetFranchiseReport).report.fatura)}
          </S.SubTitle>
          <S.SubTitle>
            Constam os seguintes repasses a serem realizados para os
            consultores:
          </S.SubTitle>
          <S.Topic>Detalhamento de repasses por Consultor</S.Topic>
          <S.MapWrapper>
            <S.Table>
              <tr>
                <th colSpan={4}>
                  {(payload as GetFranchiseReport).report.Franchise}
                </th>
              </tr>
              <tr>
                <th>Consultor</th>
                <th>Total Gerado</th>
                <th>Porcentagem</th>
                <th>Comissão</th>
              </tr>
              {(payload as GetFranchiseReport).report.detalhesConsultor.map(
                (consultor) => (
                  <tr key={consultor.Consultor}>
                    <td>{consultor.Consultor}</td>
                    <td>{FormatCurrency(consultor.totalLiquidoTransacoes)}</td>
                    <td>{consultor.porcentagem}</td>
                    <td>{FormatCurrency(consultor.comissao)}</td>
                  </tr>
                )
              )}
              <td colSpan={4}>
                <S.Paragraph>
                  TOTAL ARRECADADO:{' '}
                  {FormatCurrency(
                    (payload as GetFranchiseReport).report.detalhesConsultor.reduce(
                      (c, b) => c + b.totalLiquidoTransacoes,
                      0
                    )
                  )}
                </S.Paragraph>
                <S.Paragraph>
                  TOTAL A REPASSAR AOS CONSULTORES:{' '}
                  {FormatCurrency(
                    (payload as GetFranchiseReport).report.detalhesConsultor.reduce(
                      (c, b) => c + b.comissao,
                      0
                    )
                  )}
                </S.Paragraph>
                <S.Paragraph>
                  TOTAL A REPASSAR A FRANQUEADORA:
                  {FormatCurrency(
                    (payload as GetFranchiseReport).report.detalhesConsultor.reduce(
                      (c, b) => c + b.totalLiquidoTransacoes,
                      0
                    ) *
                      ((payload as GetFranchiseReport).report.porcentagem / 100)
                  )}
                </S.Paragraph>
              </td>
            </S.Table>
          </S.MapWrapper>

          <S.Topic>Detalhamento das transações</S.Topic>
          {(payload as GetFranchiseReport).report.detalhesConsultor.map(
            (consultor) => (
              <S.Table key={consultor.Consultor}>
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
            )
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
