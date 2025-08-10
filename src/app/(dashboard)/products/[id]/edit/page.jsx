'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function EditProductPage() {
  const router = useRouter()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchProduct = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const data = await res.json();
    setProduct(data);
    setLoading(false);
  };
  fetchProduct();
}, [id]);

const handleUpdate = async (e) => {
  e.preventDefault();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
    }),
  });

  if (res.ok) {
    router.push('/products');
  } else {
    alert('خطا در بروزرسانی محصول');
  }
};

  if (loading) return <div>در حال بارگذاری...</div>

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-bold">ویرایش محصول</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder='لینک عکس '
          value={product.image || ''}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          بروزرسانی
        </button>
      </form>
    </div>
  )
}
