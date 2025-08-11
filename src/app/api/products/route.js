import { NextResponse } from 'next/server'

let products = [
  { id: 1, title: 'محصول اول', description: 'توضیح اول', price: 100 },
  { id: 2, title: 'محصول دوم', description: 'توضیح دوم', price: 200 },
]

// GET - همه محصولات
export async function GET() {
  return NextResponse.json(products)
}

// POST - افزودن محصول
export async function POST(req) {
  const body = await req.json()
  const newProduct = { id: Date.now(), ...body }
  products.push(newProduct)
  return NextResponse.json(newProduct, { status: 201 })
}
