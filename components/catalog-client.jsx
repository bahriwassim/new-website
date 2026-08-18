'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, manufacturers, media } from '../lib/catalog';

export function CatalogClient({ products, initialCategory='', initialSub='', initialCollection='' }) {
  const [term,setTerm]=useState('');
  const [category,setCategory]=useState(initialCategory);
  const [brand,setBrand]=useState('');
  const list=useMemo(()=>products.filter(p=>(initialCollection!=='consommables'||['Implants intraoculaires','Chirurgie'].includes(p.category))&&(!category||p.category===category)&&(!initialSub||p.sub===initialSub)&&(!brand||p.brand===brand)&&(`${p.name} ${p.brand} ${p.sub}`.toLowerCase().includes(term.toLowerCase()))),[term,category,brand,initialSub,initialCollection,products]);
  return <>
    <div className="catalog-controls"><input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Rechercher un produit, une marque ou une technologie…"/><select value={category} onChange={e=>setCategory(e.target.value)}><option value="">Toutes les catégories</option>{categories.map(x=><option key={x}>{x}</option>)}</select><select value={brand} onChange={e=>setBrand(e.target.value)}><option value="">Tous les fabricants</option>{manufacturers.map(x=><option key={x}>{x}</option>)}</select></div>
    {initialCollection==='consommables'?<p className="kicker red" style={{marginTop:28}}>Consommables</p>:null}
    <p className="results">{list.length} solution{list.length>1?'s':''} sélectionnée{list.length>1?'s':''}</p>
    <div className="catalog-grid">{list.map(p=><Link href={`/produits/${p.slug}`} className="catalog-card" key={p.slug}><div><img src={media(p.image)} alt={p.name}/></div><small>{p.brand} · {p.sub}</small><h2>{p.name}</h2><span>Voir le produit <b>→</b></span></Link>)}</div>
  </>;
}
