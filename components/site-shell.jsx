'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { Preloader } from './preloader';

export function SiteShell({ children }) {
  const pathname = usePathname();
  const isConstructionPage = pathname === '/construction';

  if (isConstructionPage) return <main>{children}</main>;

  return <><Preloader /><SiteHeader /><main>{children}</main><SiteFooter /></>;
}
