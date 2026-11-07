import { CatalogClient } from '../../components/catalog-client';
import { products } from '../../lib/catalog';

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  return <>
    <section className="page-hero"><p className="kicker red">Catalogue Freedom</p><h1>Technologies conçues<br/><em>pour la précision.</em></h1><p>Explorez les solutions distribuées par Freedom Distribution.</p></section>
    <section className="catalog-wrap"><CatalogClient key={`${params.category || ''}|${params.sub || ''}|${params.collection || ''}|${params.brand || ''}`} products={products} initialCategory={params.category || ''} initialSub={params.sub || ''} initialCollection={params.collection || ''} initialBrand={params.brand || ''}/></section>
  </>;
}
