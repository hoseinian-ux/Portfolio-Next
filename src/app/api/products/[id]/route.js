import { NextResponse } from 'next/server'

// دیتای نمونه — در عمل باید از دیتابیس بیاری
let products = [
  { id: 1, title: 'محصول اول', description: 'توضیح اول', price: 100 },
  { id: 2, title: 'محصول دوم', description: 'توضیح دوم', price: 200 },
]

// دریافت محصول خاص
export async function GET(req, { params }) {
  const product = products.find(p => p.id === parseInt(params.id))
  if (!product) {
    return NextResponse.json({ message: 'محصول پیدا نشد' }, { status: 404 })
  }
  return NextResponse.json(product)
}

// بروزرسانی محصول
export async function PUT(req, { params }) {
  const body = await req.json()
  const productIndex = products.findIndex(p => p.id === parseInt(params.id))
  if (productIndex === -1) {
    return NextResponse.json({ message: 'محصول پیدا نشد' }, { status: 404 })
  }
  products[productIndex] = { ...products[productIndex], ...body }
  return NextResponse.json(products[productIndex])
}

// حذف محصول
export async function DELETE(req, { params }) {
  products = products.filter(p => p.id !== parseInt(params.id))
  return NextResponse.json({ message: 'حذف شد' })
}
