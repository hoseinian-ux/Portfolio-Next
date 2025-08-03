'use client'

import Image from 'next/image'

export default function ProductCard({ product }) {
  if (!product) return null
  return (
    <div className="bg-white rounded-2xl shadow p-4 border hover:shadow-md transition">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-64 object-contain mb-4"
      />
      <h3 className="line-clamp-1 font-bold text-lg mb-2">{product.title}</h3>
      <p className="text-gray-600 line-clamp-1 text-sm mb-2">{product.description.slice(0, 100)}...</p>
      <span className="block font-semibold text-blue-600">${product.price}</span>
    </div>
  )
}
