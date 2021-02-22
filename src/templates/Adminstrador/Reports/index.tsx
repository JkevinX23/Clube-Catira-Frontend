import * as S from './styles'
import Logo from 'components/Logo'
const Reports = () => {
  return (
    <S.Wrapper>
      <S.Button>
        <button onClick={() => window.print()}>Imprimir</button>
      </S.Button>
      <Logo />
      <S.Header>
        <h1>RELATÓRIO DO DIA 22/12/2020 Á 22/01/2021</h1>
        <p>
          Foram pagas <b>75 catiras</b>. Gerando um total líquido de{' '}
          <b>R$3.752,35</b>. Consta os seguintes repasses:
        </p>
      </S.Header>

      <S.Section>
        <h3> Franquias</h3>

        <table>
          <tr>
            <th>Franquia (id - nome)</th>
            <th>Qtd. Catiras Pagas</th>
            <th>Total arrecadado</th>
            <th>Fatura gerada</th>
          </tr>

          <tr>
            <td>2 - Eduardo (Moc)</td>
            <td>25</td>
            <td>R$1250,10</td>
            <td>R$125,01</td>
          </tr>

          <tr>
            <td> 3 - Mateus (GBI)</td>
            <td>15</td>
            <td>R$1723,25</td>
            <td>R$172,34</td>
          </tr>

          <tr>
            <td>4 - Kevin(BH)</td>
            <td>30</td>
            <td>R$779</td>
            <td>R$233,70</td>
          </tr>
        </table>
        <S.TFooter>
          <p>
            TOTAL A RECEBER DAS FRANQUIAS: <b>R$531,05</b>
          </p>
        </S.TFooter>
        <S.BreakPage />
      </S.Section>

      <S.Section>
        <h3> Detalhamento de repasses por franquia</h3>

        <table>
          <tr>
            <th colSpan={4}>2 - Eduardo (MOC)</th>
          </tr>

          <tr>
            <th>Consultores</th>
            <th>Total Gerado</th>
            <th>Porcentagem</th>
            <th>Comissão</th>
          </tr>

          <tr>
            <td> 52 - Marlon</td>
            <td>R$425</td>
            <td>8%</td>
            <td>R$34</td>
          </tr>

          <tr>
            <td>61 - Pedro</td>
            <td>R$505,14</td>
            <td>8%</td>
            <td>R$40,41</td>
          </tr>

          <tr>
            <td>79 - Marcos</td>
            <td>R$319,96</td>
            <td>10%</td>
            <td>R$32,001</td>
          </tr>
        </table>

        <S.TFooter>
          <p>
            TOTAL A REPASSAR AOS CONSULTORES: <b>R$106,41</b>
          </p>
          <p>
            TOTAL A REPASSAR A FRANQUEADORA: <b>125,01</b>
          </p>
          <p>
            LUCRO ESPERADO: <b>R$1018,68</b>
          </p>
        </S.TFooter>
        <S.BreakPage />
      </S.Section>

      <S.Section>
        <h3> Detalhamento de catiras por associado</h3>

        <table>
          <tr>
            <th colSpan={5}>4 - JK Store</th>
          </tr>

          <tr>
            <th>Transação</th>
            <th>Valor</th>
            <th>Oferta</th>
            <th>Data</th>
            <th>Fatura gerada</th>
          </tr>

          <tr>
            <td>32015</td>
            <td>R$62</td>
            <td>1103</td>
            <td>03/01/2021</td>
            <td>R$6,02</td>
          </tr>

          <tr>
            <td>32030</td>
            <td>R$162</td>
            <td>1103</td>
            <td>03/01/2021</td>
            <td>R$16,20</td>
          </tr>

          <tr>
            <td>32044</td>
            <td>R$242</td>
            <td>1109</td>
            <td>03/01/2021</td>
            <td>R$41,02</td>
          </tr>
        </table>
        <S.TFooter>
          <p>
            OFERTAS ATIVAS NO PERÍODO: <b>22</b>
          </p>
          <p>
            QUANTIDADE DE TRANSAÇÕES: <b>15</b>
          </p>
          <p>
            FATURA GERADA: <b>R$250,25</b>
          </p>
          <p>
            TOTAL MOVIMENTADO: <b>CTZ: 13.252,50</b>
          </p>
        </S.TFooter>
      </S.Section>
    </S.Wrapper>
  )
}
export default Reports
