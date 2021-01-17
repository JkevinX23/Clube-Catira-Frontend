import Create from 'templates/CreateAccountPj'
import { getConsultantsNA } from 'Context/Action/Consultant'
import { getCategoriesNA } from 'Context/Action/Category'
import { useEffect, useState } from 'react'

export default function CreateAccPJ() {
  const [consultants, setConsultants] = useState<any>()
  const [categories, setCategories] = useState<any>()

  useEffect(() => {
    async function loadConsultants() {
      const { data } = await getConsultantsNA()
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
