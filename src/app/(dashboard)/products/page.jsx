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
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('خطا در دریافت محصولات')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message || 'خطای ناشناخته')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div>
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
