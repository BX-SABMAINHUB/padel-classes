import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');

  // Si no hay sesión y no está en la página de login, redirige al login
  if (!session && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si hay sesión y está en login, redirige al dashboard
  if (session && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Aplica el middleware a todas las rutas excepto archivos estáticos y API
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
