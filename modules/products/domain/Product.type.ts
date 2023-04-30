import { UUID } from 'crypto'

export interface Product {
  id: UUID
  name: string
  price: number
  description: string
  image: string
  stock: number
  createdAt: Date
  updatedAt: Date
  isEnable: boolean
  material: string
  stones: string[]
}
