'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { megaMenu } from '../lib/navigation';

const copy = {
  fr: {home:'Accueil',about:'À propos',solutions:'Solutions',products:'Produits',makers:'Fabricants',services:'Services',contact:'Contact',quote:'Demander un devis',catalog:'CATALOGUE FREEDOM',explore:'Explorer toutes nos technologies'},
  en: {home:'Home',about:'About',solutions:'Solutions',products:'Products',makers:'Manufacturers',services:'Services',contact:'Contact',quote:'Request a quote',catalog:'FREEDOM CATALOGUE',explore:'Explore all our technologies'}
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [locale, setLocale] = useState('fr');
  useEffect(() => { const saved = localStorage.getItem('freedom-locale'); if (saved) setLocale(saved); }, []);
  const setLanguage = language => { setLocale(language); localStorage.setItem('freedom-locale', language); document.documentElement.lang = language; };
  const text = copy[locale];
  const closeMenus = () => { setMega(false); setOpen(false); };

  return <header className={`site-header ${open ? 'header-open' : ''}`}>
    <Link href="/" className="wordmark" aria-label="Freedom Distribution" onClick={closeMenus}><img src="/media/cropped-logo-retina-final-freedom-medical-ophtalmologies%20(1).png" alt="Freedom Distribution"/></Link>
    <nav onClick={closeMenus}><Link href="/">{text.home}</Link><Link href="/a-propos">{text.about}</Link><Link href="/#solutions">{text.solutions}</Link><button onClick={event => {event.stopPropagation(); setMega(value => !value);}} aria-expanded={mega}>{text.products} <b>⌄</b></button><Link href="/fabricants">{text.makers}</Link><Link href="/#services">{text.services}</Link><Link href="/contact">{text.contact}</Link></nav>
    <div className="nav-right"><div className="languages"><button className={locale === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')}>FR</button><i>/</i><button className={locale === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button></div><Link className="cta small" href="/contact">{text.quote} <b>↗</b></Link></div>
    <button className="hamburger" onClick={() => setOpen(value => !value)} aria-label="Menu" aria-expanded={open}>{open ? '×' : '☰'}</button>
    {mega && <div className="mega mega-seven"><div className="mega-groups">{megaMenu.map(section => <section key={section.slug}><Link className="mega-title" onClick={closeMenus} href={section.href || `/catalogue/${section.slug}`}><strong>{section.name}</strong></Link>{section.items.map(item => <Link onClick={closeMenus} href={item.href || `/catalogue/${item.slug}`} key={item.slug}>{item.name}</Link>)}</section>)}</div><Link onClick={closeMenus} href="/produits" className="mega-cta"><span>{text.catalog}</span><b>{text.explore} <i>→</i></b></Link></div>}
  </header>;
}
