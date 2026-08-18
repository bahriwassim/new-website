import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getCatalogPage, catalogPages } from '../../../lib/navigation';
import { media } from '../../../lib/catalog';

export function generateStaticParams() {
  return catalogPages.map(({ slug }) => ({ slug }));
}

export default async function CatalogueFamilyPage({ params }) {
  const { slug } = await params;
  const page = getCatalogPage(slug);
  if (!page) notFound();
  if (page.href) redirect(page.href);

  return <>
    <section className="family-hero">
      <div>
        <Link className="breadcrumb" href="/produits">← Catalogue</Link>
        <p className="kicker red">Catalogue Freedom</p>
        <h1>{page.name}</h1>
        <p>{page.description}</p>
      </div>
      <div className="family-hero-image"><img src={media(page.image)} alt={page.name}/></div>
    </section>
    <section className="family-content">
      {page.items.length ? <>
        <p className="kicker red">Sous-catégories</p>
        <h2>Choisissez votre <em>catégorie.</em></h2>
        <div className="family-grid">
          {page.items.map(child => <Link href={`/catalogue/${child.slug}`} className="family-card" key={child.slug}>
            <div><img src={media(child.image)} alt={child.name}/></div>
            <h3>{child.name}</h3><p>{child.description}</p><span>Découvrir <b>→</b></span>
          </Link>)}
        </div>
      </> : <div className="family-leaf">
        <p className="kicker red">Sélection Freedom</p>
        <h2>Une solution adaptée à votre pratique.</h2>
        <p>Notre équipe vous accompagne dans le choix de l’équipement, de l’instrument ou du consommable adapté à vos besoins cliniques.</p>
        <Link className="cta" href="/contact">Demander un devis <b>→</b></Link>
      </div>}
    </section>
  </>;
}
