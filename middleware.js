import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hasAccess = request.cookies.get('freedom_site_access')?.value === 'granted';

  if (!hasAccess && pathname !== '/construction') {
    return NextResponse.redirect(new URL('/construction', request.url));
  }

  if (hasAccess && pathname === '/construction') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/access|_next/static|_next/image|favicon.ico|icon.svg).*)'],
};
