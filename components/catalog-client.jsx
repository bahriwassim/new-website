'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, manufacturers, media } from '../lib/catalog';

export function CatalogClient({ products, initialCategory='', initialSub='', initialCollection='', initialBrand='' }) {
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const list = useMemo(() => products.filter(product =>
    (initialCollection !== 'consommables' || ['Implants intraoculaires', 'Chirurgie'].includes(product.category)) &&
    (!category || product.category === category) &&
    (!initialSub || product.sub === initialSub) &&
    (!brand || product.brand.toLowerCase() === brand.toLowerCase()) &&
    (`${product.name} ${product.brand} ${product.sub}`.toLowerCase().includes(term.toLowerCase())
  )), [term, category, brand, initialSub, initialCollection, products]);

  return <>
    <div className="catalog-controls">
      <input value={term} onChange={event => setTerm(event.target.value)} placeholder="Rechercher un produit, une marque ou une technologie…" aria-label="Rechercher dans le catalogue" />
      <select value={category} onChange={event => setCategory(event.target.value)} aria-label="Filtrer par catégorie"><option value="">Toutes les catégories</option>{categories.map(value => <option key={value} value={value}>{value}</option>)}</select>
      <select value={brand} onChange={event => setBrand(event.target.value)} aria-label="Filtrer par fabricant"><option value="">Tous les fabricants</option>{manufacturers.map(value => <option key={value} value={value}>{value}</option>)}</select>
    </div>
    {initialCollection === 'consommables' && <p className="kicker red" style={{marginTop:28}}>Consommables</p>}
    <p className="results">{list.length} solution{list.length > 1 ? 's' : ''} sélectionnée{list.length > 1 ? 's' : ''}</p>
    {list.length ? <div className="catalog-grid">{list.map(product => <Link href={`/produits/${product.slug}`} className="catalog-card" key={product.slug}><div><img src={media(product.image)} alt={product.name}/></div><small>{product.brand} · {product.sub}</small><h2>{product.name}</h2><span>Voir le produit <b>→</b></span></Link>)}</div> : <div className="catalog-empty"><h2>Aucune référence{brand ? ` ${brand}` : ''} dans cette sélection.</h2><p>Écrivez-nous pour connaître les disponibilités ou retirez un filtre pour afficher le catalogue.</p><Link className="cta" href="/contact">Contacter Freedom Distribution <b>↗</b></Link></div>}
  </>;
}
