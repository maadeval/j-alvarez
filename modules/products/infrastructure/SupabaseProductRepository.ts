import { supabaseClient } from '@/config/supabase_config'
import { Product } from '../domain/Product.type'
import { ProductRepository } from '../domain/ProductRepository.type'

export class SupabaseProductRepository implements ProductRepository {
  private readonly TABLE_NAME = 'product'

  async getAll() {
    const { data } = await supabaseClient.from(this.TABLE_NAME).select('*')
    return Promise.resolve(data as Product[])
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
