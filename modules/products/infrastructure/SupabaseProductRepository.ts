import { Product } from '../domain/Product.type'
import { ProductRepository } from '../domain/ProductRepository.type'

export class SupabaseProductRepository implements ProductRepository {
  async getAll() {
    return Promise.resolve([])
  }

  async getById(id: string) {
    return Promise.resolve(null)
  }

  async save(product: Product) {
    return Promise.resolve()
  }

  async delete(id: string) {
    return Promise.resolve()
  }

  async edit(id: string, newProduct: any) {
    return Promise.resolve()
  }
}
