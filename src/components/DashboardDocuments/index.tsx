import * as S from './styles'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import { documentAdesao, getAssociates } from 'Context/Action/Associates'
import { GetAssociatesAdmin } from 'Types'
import Button from 'components/Button'
import { FormatCurrency } from 'utils/Masks'
import { emitirDocumento } from 'Context/Action/Increases'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export type ReportCardDashProps = {
  direct: number
  pending: number
}

const DocumentsReportAdm = () => {
  const [id, setId] = useState<any>(0)
  const [tipo, setTipo] = useState<any>(1)
  const [associates, setAssociates] = useState<any>(null)
  const [tipos, setTipos] = useState<any>(null)
  const [documentValueFormatted, setDocValFormatted] = useState('0,00')
  const [documentValue, setDocVal] = useState(0)
  const route = useRouter()
  function compare(a: GetAssociatesAdmin, b: GetAssociatesAdmin) {
    if (a.fantasy_name.toLowerCase() < b.fantasy_name.toLowerCase()) return -1
    if (a.fantasy_name.toLowerCase() > b.fantasy_name.toLowerCase()) return 1
    return 0
  }

  useEffect(() => {
    async function loadAssociates() {
      const { data } = await getAssociates()
      const opt = data
        .sort(compare)
        .map((e) => ({ value: e.id, label: `${e.fantasy_name} - ${e.id}` }))
      setAssociates(opt)
    }

    function loadTipos() {
      setTipos([
        { value: 1, label: 'Confissão de dívida' },
        { value: 2, label: 'Contrato de Adesão' }
      ])
    }
    loadAssociates()
    loadTipos()
  }, [])

  function mascaraMoeda(value: string) {
    const onlyDigits = value
      .split('')
      .filter((s: any) => /\d/.test(s))
      .join('')
      .padStart(2, '0')
    const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
    if (Number(digitsFloat) >= 9999999) return
    setDocValFormatted(FormatCurrency(Number(digitsFloat)))
    setDocVal(Number(digitsFloat))
  }

  async function handleSubmit() {
    try {
      if (tipo === 1) {
        const { data } = await emitirDocumento({
          type: 1,
          value: documentValue,
          associate_id: id
        })

        window.open(
          '/administrador/documentos/confissaoDivida' +
            '?code=' +
            data.id +
            '&devedor=' +
            data.associate_name +
            '&documento=' +
            data.associate_document +
            '&valor=' +
            data.value +
            '&proximoPagamento=' +
            data.next_payment +
            '&proximoPagamentoPA=' +
            data.next_payment_ny +
            '&data=' +
            data.date +
            '&cidade=' +
            data.city +
            '&reason= ' +
            '&valueRequest=' +
            documentValue +
            '&endereco=' +
            data.address +
            '&responsavel=' +
            data.responsible +
            '&contato1=' +
            data.contact1 +
            '&contato2=' +
            data.contact2,
          '_blank'
        )

        // route.push({
        //   pathname: '/administrador/documentos/confissaoDivida',
        //   query: {
        //     code: data.id,
        //     devedor: data.associate_name,
        //     documento: data.associate_document,
        //     valor: data.value,
        //     proximoPagamento: data.next_payment,
        //     proximoPagamentoPA: data.next_payment_ny,
        //     data: data.date,
        //     cidade: data.city,
        //     reason: '',
        //     valueRequest: documentValue
        //   }
        // })
      } else if (tipo === 2) {
        const { data } = await documentAdesao({
          type: 2,
          associate_id: id
        })
        window.open(
          '/administrador/documentos/adesao' +
            '?code=' +
            data.id +
            '&associate_name=' +
            data.associate_name +
            '&associate_document=' +
            data.associate_document +
            '&address=' +
            data.address +
            '&date=' +
            data.date +
            '&percentage=' +
            data.percentage,
          '_blank'
        )
        // route.push({
        //   pathname: '/administrador/documentos/adesao',
        //   query: {
        //     code: data.id,
        //     associate_name: data.associate_name,
        //     associate_document: data.associate_document,
        //     address: data.address,
        //     date: data.date,
        //     percentage: data.percentage
        //   }
        // })
      }
    } catch (err) {
      console.log(err)
      toast.warn('Infelizmente não foi possível realizar a sua solicitação')
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Emissão de documentos</S.Title>
      <S.SelectWrapper>
        <S.Label>Associado</S.Label>
        <Select
          isClearable
          className="react-select-container"
          placeholder="Selecione"
          options={associates}
          onChange={(e) => setId(e?.value)}
        />
      </S.SelectWrapper>

      <S.SelectWrapper>
        <S.Label>Tipo de documento</S.Label>
        <Select
          isClearable
          className="react-select-container"
          placeholder="Selecione"
          options={tipos}
          onChange={(e) => setTipo(e?.value)}
        />
      </S.SelectWrapper>

      {tipo === 1 && (
        <S.SelectWrapper>
          <S.Label>Insira o valor</S.Label>
          <S.InputDiv>
            <input
              onChange={(e) => mascaraMoeda(e.target.value)}
              value={documentValueFormatted}
            />
          </S.InputDiv>
        </S.SelectWrapper>
      )}
      <S.Button>
        <Button
          background="black"
          radius="radius100"
          onClick={() => handleSubmit()}
        >
          Emitir
        </Button>
      </S.Button>
    </S.Wrapper>
  )
}

export default DocumentsReportAdm
