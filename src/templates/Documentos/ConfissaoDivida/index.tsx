import { postIncrease } from 'Context/Action/Increases'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import * as S from './styles'

export default function Documento() {
  const router = useRouter()
  console.log(router.query)
  const devedor = router.query.devedor
  const documento = router.query.documento
  const valor = router.query.valor
  const proximoPagamento = router.query.proximoPagamento
  const proximoPagamentoPA = router.query.proximoPagamentoPA
  const cidade = router.query.cidade
  const data = router.query.data
  const id = router.query.code
  const reason = router.query.reason
  const valueRequest = Number(router.query.valueRequest)

  async function handleSubmit() {
    if (reason && valueRequest) {
      window.print()
      await postIncrease({
        reason: reason as string,
        value: valueRequest,
        document_id: Number(id)
      })
      toast.success('Solicitação realizada com sucesso.')
    } else {
      toast.warn('Erro ao processar sua solicitação, tente novamente.')
    }
  }
  return (
    <div id="Printable">
      <S.Wrapper>
        <h1>INSTRUMENTO PARTICULAR DE CONFISSÃO DE DÍVIDA</h1>
        <S.Subtitle>
          <h6>
            CREDOR: CATIRA NEGOCIOS E INTERMEDIACOES LTDA, CNPJ:
            33.691.559/0001-64
          </h6>
          {
            <h6>
              DEVEDOR: {devedor}, {documento}
            </h6>
          }
        </S.Subtitle>

        <S.BodyDocument>
          {
            <p>
              <b>CLÁUSULA PRIMEIRA: </b>Ressalvadas quaisquer outras obrigações
              aqui não incluídas, pelo presente instrumento e na melhor forma de
              direito, o DEVEDOR confessa dever ao CREDOR a quantia líquida,
              certa e exigível no valor de {valor}.
            </p>
          }
          {
            <p>
              <b>CLÁUSULA SEGUNDA: </b> Embora reconhecendo como boa a origem da
              dívida, o DEVEDOR, compromete-se a pagar todo dia 05 (cinco) de
              cada mês, a partir de {proximoPagamento}, e até que encerre o
              montante devido, 50% do seu rendimento mensal proveniente da
              empresa Catira Negócios e Intermediações Ltda, inscrita no CNPJ
              33.691.559/0001-64, a qual detêm 25% das cotas de participação.
            </p>
          }
          <p>
            <b>Parágrafo Primeiro: </b>Caso venha a dispor das suas cotas de
            participação na empresa acima referida acontecerá o vencimento
            integral e antecipado do débito, sujeitando a DEVEDOR, além da
            execução do presente instrumento, ao pagamento do valor integral do
            débito, sobre o qual incidirá a aplicação de multa instituída na
            forma da Lei.
          </p>

          {
            <p>
              <b>Parágrafo Segundo: </b>Caso a empresa referida acima venha a
              falência ou não aja faturamento suficiente para que o DEVEDOR
              honre com o pagamento da dívida durante o ano de 2021, a forma de
              pagamento será transformada em parcelas mensais, pagas sempre no
              dia 05 de cada mês, a partir de janeiro de
              {proximoPagamentoPA}, no valor de, meio salário mínimo vigente nas
              datas de pagamento, cada parcela, até que seja pago todo montante
              da dívida.
            </p>
          }
          <p>
            <b>Parágrafo Terceiro: </b>O não pagamento de qualquer parcela no
            seu vencimento, importará no vencimento integral e antecipado do
            débito, sujeitando a DEVEDOR, além da execução do presente
            instrumento, ao pagamento do valor integral do débito, sobre o qual
            incidirá a aplicação de multa instituída na forma da Lei.
          </p>

          <p>
            <b>CLÁUSULA TERCEIRA: </b>À DÍVIDA ora reconhecida e assumida pelo
            DEVEDOR, como líquida, certa e exigível, no valor acima mencionado,
            aplica-se o disposto no artigo 585, II, do Código de Processo Civil
            Brasileiro, haja vista o caráter de título executivo extrajudicial
            do presente instrumento de confissão de dívida.
          </p>

          <p>
            <b>CLÁUSULA QUARTA: </b>: A eventual tolerância à infringência de
            qualquer das cláusulas deste instrumento ou o não exercício de
            qualquer direito nele previsto constituirá mera liberalidade, não
            implicando em novação ou transação de qualquer espécie.
          </p>

          <p>
            Isto posto, firma este instrumento em 2 (duas) vias de igual teor,
            na presença de duas testemunhas.
          </p>
        </S.BodyDocument>
        <S.PreFooter>
          {
            <p>
              {cidade}, {data}
            </p>
          }
        </S.PreFooter>
        <S.Footer>
          <S.TFooter>
            <div>
              <span>_________________________________________________</span>
              <br />
              <p>CREDOR</p>
            </div>
            <div>
              <span>_________________________________________________</span>
              <br />
              <p>DEVEDOR</p>
            </div>
          </S.TFooter>
          <br />
          <br />
          <br />
          <p>
            ____________________________________________________________________________________________________
          </p>
          <S.TFooter>
            <div>
              <p>Nome: </p>
              <p>CPF:</p>
            </div>
            <div>
              <p>Nome: </p>
              <p>CPF:</p>
            </div>
          </S.TFooter>
        </S.Footer>
      </S.Wrapper>
      <S.Button>
        <button onClick={() => handleSubmit()}> CONCORDAR E IMPRIMIR </button>
      </S.Button>
    </div>
  )
}
