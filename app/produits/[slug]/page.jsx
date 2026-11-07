import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PdfBookReader } from '../../../components/pdf-book-reader';
import { ProductVideos } from '../../../components/product-videos';
import { media, products } from '../../../lib/catalog';

export function generateStaticParams(){return products.map(product=>({slug:product.slug}));}

export default async function ProductPage({params}){
  const {slug}=await params;
  const product=products.find(item=>item.slug===slug);
  if(!product)notFound();
  const related=products.filter(item=>item.category===product.category&&item.slug!==slug).slice(0,3);

  return <>
    <section className="product-hero"><div><Link className="breadcrumb" href="/produits">← Catalogue</Link><p className="kicker red">{product.brand} · {product.category}</p><h1>{product.name}</h1><p>{product.description}</p><div className="hero-product-actions"><Link className="cta" href={`/contact?product=${product.slug}`}>Demander un devis <b>→</b></Link>{product.documents?.length&&<a href="#documents" className="document-shortcut">↓ Lire {product.documents.length} document{product.documents.length>1?'s':''}</a>}{product.externalUrl&&<a className="document-shortcut" href={product.externalUrl} target="_blank" rel="noreferrer">Site du fabricant ↗</a>}</div></div><div className="product-hero-image"><img src={media(product.image)} alt={product.name}/></div></section>
    <section className="product-info"><aside><span>01</span><b>Présentation</b><span>02</span><b>Applications</b><span>03</span><b>Documentation</b></aside><div><p className="kicker red">La solution</p><h2>Une technologie sélectionnée pour les professionnels de santé.</h2>{product.content?.map((text,index)=><p key={index}>{text}</p>)}<p>Freedom Distribution accompagne les établissements et professionnels dans le choix de leurs solutions ophtalmologiques. Pour les caractéristiques détaillées, les applications et la documentation officielle, contactez notre équipe.</p><div className="info-grid"><article><small>Fabricant</small><b>{product.brand}</b></article><article><small>Catégorie</small><b>{product.category}</b></article><article><small>Famille</small><b>{product.sub}</b></article></div>
      {product.videos?.length&&<section className="documents"><p className="kicker red">Vidéos du produit</p><h3>Démonstrations et ressources vidéo</h3><ProductVideos videos={product.videos}/></section>}
      {product.documents?.length&&<section className="documents" id="documents"><p className="kicker red">Documents officiels</p><h3>Lire les fiches et brochures</h3><PdfBookReader documents={product.documents}/></section>}
    </div></section>
    <section className="related"><p className="kicker red">À découvrir également</p><h2>Solutions associées</h2><div className="related-grid">{related.map(item=><Link href={`/produits/${item.slug}`} key={item.slug}><img src={media(item.image)} alt={item.name}/><small>{item.brand}</small><h3>{item.name}</h3></Link>)}</div></section>
  </>;
}
