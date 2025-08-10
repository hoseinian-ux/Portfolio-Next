import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://backend-portfolio-ixp8.onrender.com/products')

    if (!response.ok) {
      return NextResponse.json({ error: 'خطا در دریافت محصولات از API خارجی' }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'خطای داخلی سرور' }, { status: 500 })
  }
}
