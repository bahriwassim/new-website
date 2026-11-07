import Link from 'next/link';

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-brand"><Link href="/" className="wordmark"><img src="/media/cropped-logo-retina-final-freedom-medical-ophtalmologies%20(1).png" alt="Freedom Distribution"/></Link><p>Freedom Distribution distribue des technologies ophtalmologiques en Tunisie et en Afrique.</p><a className="footer-phone" href="tel:+21673226630">+216 73 226 630</a><a className="footer-phone" href="tel:+21620517450">+216 20 517 450</a></div>
    <div><b>Freedom Distribution</b><Link href="/a-propos">À propos de nous</Link><Link href="/equipe">Notre équipe</Link><Link href="/fabricants">Nos fabricants</Link><Link href="/contact">Contact</Link></div>
    <div><b>Solutions</b><Link href="/produits?category=Implants+intraoculaires">Implants intraoculaires</Link><Link href="/produits?category=Exploration+%26+diagnostic">Exploration & diagnostic</Link><Link href="/produits?category=Chirurgie">Chirurgie</Link><Link href="/produits?category=Dry+Eye">Dry Eye</Link></div>
    <div className="footer-addresses"><b>Nos implantations</b><address><strong>Sousse</strong>Immeuble Freedom<br/>Av. Ibn Jazzar, 4000 Sousse</address><address><strong>Tunis</strong>Avenue 9 Avril N° 167<br/>Tunis</address><address><strong>Sfax</strong>IMM El Borj · Bloc B<br/>Bureau N° B4, Sfax</address></div>
    <div className="copyright"><a href="mailto:contact@ophtalmiques.com">contact@ophtalmiques.com</a><span>© 2026 Freedom Distribution<br/>Tous droits réservés.</span><span>Développé par Stiky Consulting</span></div>
  </footer>;
}
