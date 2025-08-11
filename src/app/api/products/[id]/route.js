import { NextResponse } from 'next/server'

let products = [
  { id: 1, title: 'محصول اول', description: 'توضیح اول', price: 100 },
  { id: 2, title: 'محصول دوم', description: 'توضیح دوم', price: 200 },
]

// GET - محصول با id خاص
export async function GET(req, { params }) {
  const product = products.find(p => p.id == params.id)
  if (!product) return NextResponse.json({ error: 'یافت نشد' }, { status: 404 })
  return NextResponse.json(product)
}

// PUT - ویرایش محصول
export async function PUT(req, { params }) {
  const body = await req.json()
  const index = products.findIndex(p => p.id == params.id)
  if (index === -1) return NextResponse.json({ error: 'یافت نشد' }, { status: 404 })
  products[index] = { ...products[index], ...body }
  return NextResponse.json(products[index])
}

// DELETE - حذف محصول
export async function DELETE(req, { params }) {
  products = products.filter(p => p.id != params.id)
  return NextResponse.json({ message: 'حذف شد' })
}
