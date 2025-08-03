'use client'

import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('خطا در دریافت اطلاعات')
  return res.json()
}

export default function MoviesList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>
  if (error) return <p className="text-center text-red-500">خطا در دریافت اطلاعات</p>

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-10">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
