'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductList({ products }) {
  const [productList, setProductList] = useState(products)

  const handleDelete = async (id) => {
    const confirmDelete = confirm('آیا از حذف این محصول مطمئن هستید؟')
    if (!confirmDelete) return

    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        // حذف از لیست بدون رفرش صفحه
        setProductList(productList.filter((p) => p.id !== id))
      } else {
        alert('خطا در حذف محصول')
      }
    } catch (err) {
      alert('اشکال در اتصال به سرور')
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
      {productList.map((product) => (
        
        <div key={product.id} className="bg-white rounded-2xl shadow-2xl p-4 relative group">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
          <div className="mt-2 text-blue-600 font-bold">${product.price}</div>

          <div className="flex justify-between mt-4 text-sm">
            <Link
              href={`/products/${product.id}/edit`}
              className="text-blue-500 rounded border px-2 py-1 hover:underline"
            >
              ویرایش
            </Link>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-red-600  rounded border px-2 py-1 hover:underline"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
