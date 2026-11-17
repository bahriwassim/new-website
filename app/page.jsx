import Link from 'next/link';
import { Reveal } from '../components/reveal';
import { categories, manufacturers, media, products } from '../lib/catalog';

const categoryPhotos = [
  {src:media('site-media/images/expertise-exam.jpg'),alt:'Examen ophtalmologique avec un instrument de mesure'},
  {src:media('site-media/images/expertise-diagnostics.jpg'),alt:'Équipement de diagnostic ophtalmologique'},
  {src:media('site-media/images/expertise-surgery.jpg'),alt:'Équipe chirurgicale travaillant au microscope opératoire'},
  {src:media('site-media/images/expertise-dry-eye.jpg'),alt:'Examen des yeux par un professionnel de santé'}
];

export default function Home() {
  const featured = products.filter(product => ['rayone-hydrophobic-aspheric', 'casia-2', 'revo-fc130'].includes(product.slug));
  const descriptions = ['Implants et solutions dédiés à la chirurgie de la cataracte.','Imagerie et équipements pour l’examen et le diagnostic ophtalmologique.','Instruments et technologies pour le bloc opératoire.','Solutions spécialisées dans la prise en charge de l’œil sec.'];

  return <>
    <section className="hero-premium">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={media('produits/WhatsApp Image 2026-09-30 at 12.15.04.jpeg')}><source src={media('produits/hero-motion.mp4')} type="video/mp4"/></video>
      <div className="hero-copy"><Reveal><p className="kicker">Freedom Distribution <i/> Tunisia · Africa</p><h1>L’innovation médicale<br/><em>au service de la vision.</em></h1><p>Un partenaire MedTech dédié aux équipements, implants et technologies ophtalmologiques de précision.</p><div className="hero-actions"><Link className="cta" href="#solutions">Découvrir nos solutions <b>→</b></Link><Link className="link-light" href="/contact">Demander un devis ↗</Link></div></Reveal></div>
      <a className="hero-scroll" href="#partners"><span>Défiler</span><i aria-hidden="true">↓</i></a>
    </section>

    <section className="manufacturer-strip" id="partners"><div className="partner-showcase"><Reveal className="partner-copy"><p className="kicker red">Partenaires internationaux</p><h2>Des technologies issues de<br/><em>fabricants de référence.</em></h2><p>Nous réunissons des fabricants reconnus et des technologies choisies pour accompagner les professionnels de l’ophtalmologie.</p><Link className="arrow-link" href="/fabricants">Voir tous les fabricants <b>→</b></Link></Reveal><Reveal className="partner-visual" delay={.12}><figure className="home-feature-photo"><img src={media('produits/WhatsApp Image 2026-09-30 at 12.15.04.jpeg')} alt="Un professionnel utilise un microscope opératoire Leica"/><figcaption>Technologies de précision au service des équipes ophtalmologiques</figcaption></figure></Reveal></div><div className="logo-flow">{[...manufacturers,...manufacturers].map((manufacturer,index)=><span key={`${manufacturer}-${index}`}>{manufacturer}</span>)}</div></section>

    <section id="about" className="about-section"><Reveal><p className="kicker red">À propos de nous</p><h2>Freedom Distribution,<br/><em>partenaire de votre pratique.</em></h2><p>Freedom Distribution est une entreprise privée spécialisée dans la distribution d’équipements, d’implants, d’accessoires ophtalmiques et de technologies médicales innovantes en Tunisie et en Afrique. La société propose une large gamme d’accessoires chirurgicaux de haute qualité, sélectionnés auprès de partenaires qualifiés, expérimentés et certifiés, afin d’offrir un service optimal à ses partenaires.</p></Reveal></section>

    <section id="solutions" className="solution-section"><Reveal><p className="kicker red">Nos expertises · Freedom Medical</p><h2>Des solutions pour chaque étape<br/><em>du parcours ophtalmologique.</em></h2></Reveal><div className="solution-grid-next">{categories.map((category,index)=>{const photo=categoryPhotos[index];const label=category==='Chirurgie'?'Chirurgie de la rétine':category;return <Reveal key={category} delay={index*.08}><Link href={`/produits?category=${encodeURIComponent(category)}`} className={'solution-tile tile-'+index}><div><small>0{index+1}</small><h3>{label}</h3><p>{descriptions[index]}</p><b>Explorer les solutions <span aria-hidden="true">→</span></b></div><img src={photo.src} alt={photo.alt} loading="lazy"/></Link></Reveal>})}</div></section>

    <section className="feature-products"><div className="heading-row"><Reveal><p className="kicker red">Catalogue sélectionné</p><h2>Nos solutions phares.</h2></Reveal><Link href="/produits" className="arrow-link">Explorer tous les produits <b>→</b></Link></div><div className="featured-grid">{featured.map((product,index)=><Reveal key={product.slug} delay={index*.07}><Link href={`/produits/${product.slug}`} className="product-tile"><div className="product-photo"><img src={media(product.image)} alt={product.name}/></div><small>{product.brand} · {product.category}</small><h3>{product.name}</h3><span>Découvrir <b>↗</b></span></Link></Reveal>)}</div></section>

    <section id="services" className="value-section"><Reveal><p className="kicker red">Au-delà du produit</p><h2>Plus qu’un distributeur.<br/><em>Un partenaire technologique.</em></h2></Reveal><div className="value-list">{[['01','Conseil','Une orientation vers les solutions adaptées à vos besoins.'],['02','Installation','Une mise en service et une prise en main accompagnées.'],['03','Formation','Un transfert de compétences pour vos équipes.'],['04','Support technique','Un interlocuteur disponible à chaque étape.']].map(item=><Reveal key={item[0]}><article><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></article></Reveal>)}</div></section>

    <section className="cta-panel"><Reveal><p className="kicker red">Échangeons</p><h2>Un besoin spécifique ?<br/><em>Parlons-en.</em></h2><Link className="cta" href="/contact">Demander un devis <b>→</b></Link></Reveal></section>
  </>;
}
