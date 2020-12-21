export type ProdTypes = {
  id: number
  img: string
  associate: string
  city: string
  state: string
  value: string
  name: string
  title: string
}
export type CatirasProps = {
  id: number
  type: string
  associate: string
  offer: string
  qtd: number
  value: number
  date: string
}
export type MenuProps = {
  username?: string
  background?: string
  handleChange?: (newValue: string) => void
}
