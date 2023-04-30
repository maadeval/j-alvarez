import { ProductRepository } from '../../domain/ProductRepository.type'

export const getProducts = async (productRepository: ProductRepository) => {
  try {
    const products = await productRepository.getAll()
    return products
  } catch (err) {
    throw new Error('Error getting products')
  }
}
