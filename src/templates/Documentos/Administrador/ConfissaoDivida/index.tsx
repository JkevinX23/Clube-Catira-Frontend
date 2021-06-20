import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import * as S from './styles'

export default function Documento() {
  const router = useRouter()
  const urlParams = ''
  let devedor = ''
  let documento = ''
  let valor = ''
  let proximoPagamento = ''
  let proximoPagamentoPA = ''
  let cidade = ''
  let data = ''
  let endereco = ''
  let responsavel = ''
  let contato1 = ''
  let contato2 = ''
  let valueRequest = 0
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    devedor = urlParams.get('devedor') || ''
    documento = urlParams.get('documento') || ''
    valor = urlParams.get('valor') || ''
    proximoPagamento = urlParams.get('proximoPagamento') || ''
    proximoPagamentoPA = urlParams.get('proximoPagamentoPA') || ''
    cidade = urlParams.get('cidade') || ''
    data = urlParams.get('data') || ''
    valueRequest = Number(urlParams.get('valueRequest')) || 0
    endereco = urlParams.get('endereco') || ''
    responsavel = urlParams.get('responsavel') || ''
    contato1 = urlParams.get('contato1') || ''
    contato2 = urlParams.get('contato2') || ''
  }
  async function handleSubmit() {
    if (valueRequest) {
      window.print()
      router.push('/administrador')
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
          <br />
          {
            <h6>
              DEVEDOR: {devedor}, {documento}, situada em {endereco},
              representado(a) por {responsavel} e atendendo nos seguintes
              telefones: {contato1} e {contato2}
            </h6>
          }
        </S.Subtitle>

        <S.BodyDocument>
          {
            <p>
              Pelo presente instrumento particular e na melhor forma de direito,
              confessam e assumem como líquida e certa a dívida a seguir
              descrita:
            </p>
          }
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
              dívida, o DEVEDOR, compromete-se a pagar no período de 01 ano, a
              partir da data de assinatura deste, na forma de produtos ou
              serviços oferecidos dentro da plataforma Clube da Catira, sendo
              que não poderá deixar de atender por um valor mínimo referente a
              1/12 do valor total da dívida mensalmente.
            </p>
          }
          <p>
            <b>Parágrafo Primeiro: </b>Caso não atenda aos associados do Clube
            da Catira, na forma de produtos ou serviços, nas condições expostas
            acima, após o período de 01 ano, o CREDOR tem o direito de receber
            em moeda corrente circulante o valor da dívida ou parte faltante.
          </p>
          {
            <p>
              <b>Parágrafo Segundo: </b>O não pagamento de qualquer parcela no
              seu vencimento, importará no vencimento integral e antecipado do
              débito, sujeitando a DEVEDOR, além da execução do presente
              instrumento, ao pagamento do valor integral do débito, sobre o
              qual incidirá a aplicação de multa instituída na forma da Lei.
            </p>
          }
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
        <S.PreFooter>{<p>Juiz de Fora, {data}</p>}</S.PreFooter>
        <S.Footer>
          <S.TFooter>
            <div>
              <span>_________________________________________________</span>
              <br />
              <p>Catira Negocios e Intermediações LTDA</p>
            </div>
            <div>
              <span>_________________________________________________</span>
              <br />
              <p>{devedor}</p>
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
      <S.PreFooter>
        {' '}
        <i>
          {' '}
          *Assinar, reconhecer firma e encaminhar ao seu consultor Clube da
          Catira. Assim feito basta aguardar a liberação do limite desejado.
        </i>
      </S.PreFooter>
      <S.Button>
        <button onClick={() => handleSubmit()}> IMPRIMIR </button>
      </S.Button>
    </div>
  )
}
