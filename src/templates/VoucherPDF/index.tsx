import Logo from 'components/Logo'
import * as S from './styles'
export default function VoucherPDF() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>
          <Logo />
        </S.Logo>
        <S.Title>
          <h2>Cupom</h2>
          <h4>A7A916E6DB</h4>
        </S.Title>
      </S.Header>
      <S.Content>
        <S.Image></S.Image>
        <S.Session>
          <h3>Nome da loja</h3>
          <h1>Ct$ 100,00</h1>
          <p>Transação realizada em: 22/10/2020</p>
        </S.Session>
      </S.Content>
      <S.Description>
        <p>Essa é a descrição da oferta</p>
      </S.Description>
      <S.Associates>
        <S.Salesman>
          <h4>Vendedor</h4>
          <p>
            <b>Nome do vendedor</b>
          </p>
          <p>CNPJ: 29.487.294/0001-00</p>
          <p>Endereço: Avenida Donato Quintino, 90</p>
          <p>Cidade Nova 39400546 - Montes Claros/MG</p>
          <p>Telefone: (38) 99870-1988</p>
          <p>Email: artemaco.tendencias@gmail.com</p>
        </S.Salesman>
        <S.Buyer>
          <h4>Comprador</h4>
          <p>
            <b>Nome do vendedor</b>
          </p>
          <p>CNPJ: 29.487.294/0001-00</p>
          <p>Endereço: Avenida Donato Quintino, 90</p>
          <p>Cidade Nova 39400546 - Montes Claros/MG</p>
          <p>Telefone: (38) 99870-1988</p>
          <p>Email: artemaco.tendencias@gmail.com</p>
        </S.Buyer>
      </S.Associates>
      <S.Footer>
        <p>
          <b>Recibo</b>
        </p>
        <p>
          Catirei 1 unidade(s) de voucher compra art em aço do associado Art em
          Aço Tendencias no valor de Ct$ 100,00
        </p>

        <S.Data>
          <span>Montes Claros, ________/________/________</span>
          <S.Signature>
            <span>________________</span>
            <span>Comprador</span>
          </S.Signature>
        </S.Data>
      </S.Footer>
    </S.Wrapper>
  )
}
