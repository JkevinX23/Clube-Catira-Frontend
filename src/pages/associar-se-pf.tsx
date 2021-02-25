import Create from 'templates/CreateAccountPF'
import { getConsultantsNA } from 'Context/Action/Consultant'
import { getCategoriesNA } from 'Context/Action/Category'
import { useEffect, useState } from 'react'
export default function CreateAccPF() {
  const [consultants, setConsultants] = useState<any>()
  const [categories, setCategories] = useState<any>()

  useEffect(() => {
    async function loadConsultants() {
      const { data } = await getConsultantsNA()
      const search = window.location.search
      const params = new URLSearchParams(search)
      const cons = params.get('id')
      if (Number(cons) > 0) {
        const payload = data.filter((c) => c.id === Number(cons))
        payload.length > 0 ? setConsultants(payload) : setConsultants(data)
        return
      }
      setConsultants(data)
    }
    async function loadCategories() {
      const { data } = await getCategoriesNA()
      setCategories(data)
    }
    loadConsultants()
    loadCategories()
  }, [])

  return <Create consultants={consultants} categories={categories} />
}
