import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { generateReport } from 'Context/Action/Reports'
import Footer from 'components/Footer'
import { useState } from 'react'
import * as S from './styles'
import HeaderDash from 'components/HeaderDash'
import { HomeAdminProps } from 'Types'
import SidebarAdmin from 'components/Sidebar'
import { ptBR } from 'date-fns/locale'
import {
  defaultStaticRanges,
  defaultInputRanges
} from 'react-date-range/dist/defaultRanges'
import Button from 'components/Button'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function ReportAdminPage({ name, role }: HomeAdminProps) {
  const [startDate, setStartDate] = useState(new Date('2021-01-02'))
  const [endDate, setEndDate] = useState(new Date())
  const router = useRouter()

  function handleSelect({ selection }: any) {
    setStartDate(selection.startDate)
    setEndDate(selection.endDate)
  }

  const staticRangesLabels = {
    Today: 'Hoje',
    Yesterday: 'Ontem',
    'This Week': 'Essa semana',
    'Last Week': 'Semana passada',
    'This Month': 'Esse mês',
    'Last Month': 'Mês passado'
  }

  const inputRangesLabels = {
    'days up to today': 'Dias até hoje',
    'days starting today': 'Dias começando de hoje'
  }

  function translateRange(dictionary: any) {
    return (item: any) =>
      dictionary[item.label] ? { ...item, label: dictionary[item.label] } : item
  }

  const brStaticRanges = defaultStaticRanges.map(
    translateRange(staticRangesLabels)
  )
  const brInputRanges = defaultInputRanges.map(
    translateRange(inputRangesLabels)
  )

  async function handleSubmit() {
    try {
      router.push({
        pathname: '/administrador/report',
        query: { dateInit: startDate.toString(), dateEnd: endDate.toString() }
      })
    } catch (err) {
      toast.warn('Algo de errado ocorreu.')
    }
  }
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.WrapperHeader>
          <HeaderDash name={name} role={role} />
        </S.WrapperHeader>
        <S.DatePicker>
          <DateRangePicker
            ranges={[{ startDate, endDate, key: 'selection' }]}
            staticRanges={brStaticRanges}
            inputRanges={brInputRanges}
            onChange={handleSelect}
            locale={ptBR}
          />
          <Button
            size="xsmall"
            fullWidth={false}
            radius="radius100"
            background="blue"
            onClick={handleSubmit}
          >
            Gerar relatório
          </Button>
        </S.DatePicker>
      </S.WrapperContent>
      <SidebarAdmin />
      <S.WrapperFooter>
        <Footer />
      </S.WrapperFooter>
    </S.Wrapper>
  )
}
