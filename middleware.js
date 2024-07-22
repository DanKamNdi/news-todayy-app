import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('session');

  // List of protected routes
  const protectedRoutes = ['/', '/headlines', '/business', '/technology', '/entertainment', '/sports', '/health', '/science'];

  if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/headlines', '/business', '/technology', '/entertainment', '/sports', '/health', '/science'],
};