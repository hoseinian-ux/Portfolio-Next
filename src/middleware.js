import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value

  const isProtected = request.nextUrl.pathname.startsWith('/dashboard')

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
