'use client'

import { useEffect, useState } from 'react'
import ProductList from '@/components/productlist'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://backend-portfolio-ixp8.onrender.com/products')

        const data = await res.json()
        setProducts(data)
      } catch (err: any) {
        console.error('Error fetching products:', err)
        setError(err.message || 'خطای ناشناخته')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="w-full px-4">
      <h1 className="text-xl font-bold mb-4">محصولات</h1>
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  )
}
