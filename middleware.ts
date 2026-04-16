import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Simplemente pasamos todas las peticiones por ahora
  return NextResponse.next()
}

// Aplicamos el middleware solo a rutas que NO sean recursos estáticos
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
