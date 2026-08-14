import './globals.css';
import './overrides.css';
import './ux.css';
import './team-footer.css';
import './logos.css';
import './final-overrides.css';
import './manufacturer-logo.css';
import './nav-size.css';
import './classy-motion.css';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { Preloader } from '../components/preloader';

export const metadata = { title: 'Freedom Distribution | Medical Technology Partner', description: 'Équipements, implants et technologies ophtalmologiques en Tunisie et en Afrique.' };

export default function RootLayout({ children }) {
  return <html lang="fr"><body><Preloader /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
