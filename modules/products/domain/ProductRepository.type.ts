import { Product } from './Product.type'

export interface ProductRepository {
  getAll(): Promise<Product[]>
  getById(id: string): Promise<Product | null>
  save(product: Product): Promise<void>
  delete(id: string): Promise<void>
  edit(id: string, newProduct: Product): Promise<void>
}
