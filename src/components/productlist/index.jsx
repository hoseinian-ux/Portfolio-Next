'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductList({ products }) {
  const [productList, setProductList] = useState(products)

  const handleDelete = async (id) => {
    const confirmDelete = confirm('آیا از حذف این محصول مطمئن هستید؟');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Server response:', errorText);
        alert('خطا در حذف محصول: ' + errorText);
        return;
      }

      // بعد از حذف موفق، محصول رو از لیست حذف کن و state رو آپدیت کن
      setProductList(prevList => prevList.filter(product => product.id !== id));

    } catch (err) {
      alert('اشکال در اتصال به سرور');
    }
  };

  return (
    <div>
      {/* دکمه اضافه کردن محصول */}
      <div className="mb-6 text-center">
        <Link href="/products/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            افزودن محصول جدید
          </button>
        </Link>
      </div>

      {/* لیست محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {productList.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-2xl p-6 relative group max-w-sm">
            <img
              src={product.image}
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
                className="text-red-600 rounded border px-2 py-1 hover:underline"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
