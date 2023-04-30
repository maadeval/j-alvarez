import { getProducts } from '@/modules/products/application/get/getProducts'
import { Product } from '@/modules/products/domain/Product.type'
import { ProductRepository } from '@/modules/products/domain/ProductRepository.type'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ProductList = ({
  repository,
}: {
  repository: ProductRepository
}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts(repository).then(setProducts)
  }, [repository])

  console.log({ products })

  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </>
  )
}
