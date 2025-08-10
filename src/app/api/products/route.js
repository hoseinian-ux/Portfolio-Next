import { NextResponse } from 'next/server';

const products = [
  { id: 1, title: 'محصول اول', description: 'توضیح اول', price: 100 },
  { id: 2, title: 'محصول دوم', description: 'توضیح دوم', price: 200 },
];

export async function GET() {
  return NextResponse.json(products);
}
