import { getToken } from 'next-auth/jwt'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
  const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  console.log(session)
  if(!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/admin/:path*',
}