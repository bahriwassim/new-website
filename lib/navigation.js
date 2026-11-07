const image = {
  implants: 'IMPLANTS/APPASSAMY/acryfold/01_Acryfold-In.jpg.webp',
  knives: 'COUTEAUX/SURGICUT/Straight-Knives-01-scaled-1878x799.webp',
  rings: 'site-media/images/capsular-ring.jpg',
  iris: 'site-media/images/iris-retractor.jpg',
  contrast: 'EXPLORATION/OCT/TOMEY/60f6bab99564be29e78ee845_casia2.png',
  tamponnement: 'PRODUITS TAMPONEMENTS/SILICONE/3301-Densiron-68-G-80920_G-80910_Packshot.webp',
  oct: 'EXPLORATION/OCT/OPTOPOL/REVO FC130/REVO_FC130.avif',
  retina: 'EXPLORATION/ANGIOGRAPHIE-RETINOGRAPHIES/TOMEY/TFC1000-FULL02-655x655.jpg',
  consultation: 'EXPLORATION/lampe a fente/TOMEY/TSL-900H.png',
  biometry: 'EXPLORATION/ECHOGRAPHIE/ECHO A/TOMEY/60f6bbd62c14fd2511a20bf7_oa-2000.png',
  fields: 'EXPLORATION/CVA/OPTOPOL/PTS2000/main_pic-1.avif',
  laser: 'site-media/images/laser-equipment.png',
  instruments: 'COUTEAUX/GEUDER/EE5-416x548.jpg',
  surgery: 'site-media/images/sophi-system.png',
  microscope: 'site-media/images/leica-proveo8.jpg',
  dryEye: 'DRY EYE/SBM/ACTIVA SBM.jpg'
};

const item = (name, slug, picture, description) => ({ name, slug, image: picture, description });

export const megaMenu = [
  { name: 'Consommables', slug: 'consommables', href: '/produits?collection=consommables', items: [
    item('Implants intraoculaires', 'implants-intraoculaires', image.implants, 'Solutions implantables pour la chirurgie de la cataracte.'),
    item('Couteaux ophtalmiques', 'couteaux-ophtalmiques', image.knives, 'Couteaux et lames de microchirurgie de précision.'),
    item('Anneaux', 'anneaux', image.rings, 'Anneaux et segments dédiés au soutien capsulaire.'),
    item('Rétracteurs à iris', 'retracteurs-a-iris', image.iris, 'Dispositifs de maintien et de dilatation pupillaire.'),
    item('Produits de contraste', 'produits-de-contraste', image.contrast, 'Produits utilisés pour la visualisation et le contraste.'),
    item('Produits de tamponnement', 'produits-de-tamponnement', image.tamponnement, 'Gaz, huiles et liquides destinés au tamponnement vitréo-rétinien.')
  ]},
  { name: 'Explorations fonctionnelles', slug: 'explorations-fonctionnelles', items: [
    item('OCT', 'oct', image.oct, 'Tomographie par cohérence optique pour l’analyse oculaire.'),
    item('Rétinographes + angiographes', 'retinographes-angiographes', image.retina, 'Imagerie du fond d’œil et angiographie.'),
    item('Unités de consultation', 'unites-de-consultation', image.consultation, 'Équipements essentiels à l’examen ophtalmologique.'),
    item('Biomètres + échographes', 'biometres-echographes', image.biometry, 'Mesures biométriques et échographies oculaires.'),
    item('Champs visuels', 'champs-visuels', image.fields, 'Périmétrie et exploration du champ visuel.')
  ]},
  { name: 'Laser', slug: 'laser', items: [
    item('PPR', 'laser-ppr', image.laser, 'Solutions laser pour la photokératectomie réfractive.'),
    item('YAG', 'laser-yag', image.laser, 'Solutions laser YAG pour les traitements du segment antérieur.')
  ]},
  { name: 'Instruments chirurgicaux', slug: 'instruments-chirurgicaux', items: [
    item('Marque Focus', 'instruments-focus', image.instruments, 'Instruments chirurgicaux de la marque Focus.'),
    item('Marque Appasamy', 'instruments-appasamy', image.instruments, 'Instruments chirurgicaux de la marque Appasamy.'),
    item('Marque Geuder', 'instruments-geuder', image.instruments, 'Instruments chirurgicaux de la marque Geuder.')
  ]},
  { name: 'Appareils de chirurgie', slug: 'appareils-de-chirurgie', items: [
    item('Rayner – SOPHI', 'rayner-sophi', image.surgery, 'Appareils de chirurgie Rayner et SOPHI.'),
    item('Geuder', 'appareils-geuder', image.surgery, 'Appareils de chirurgie de la marque Geuder.')
  ]},
  { name: 'Microscopes opératoires', slug: 'microscopes-operatoires', items: [
    item('Leica', 'microscopes-leica', image.microscope, 'Microscopes opératoires Leica.'),
    item('Mediworks', 'microscopes-mediworks', image.microscope, 'Microscopes opératoires Mediworks.'),
    item('Takagi', 'microscopes-takagi', image.microscope, 'Microscopes opératoires Takagi.'),
    item('Appasamy', 'microscopes-appasamy', image.microscope, 'Microscopes opératoires Appasamy.')
  ]},
  { name: 'Dry Eye', slug: 'dry-eye', items: [
    item('Plexer', 'dry-eye-plexer', image.dryEye, 'Technologie Plexer dédiée à la prise en charge du Dry Eye.'),
    item('OptiLight', 'dry-eye-optilight', 'site-media/images/optilight.png', 'Technologie IPL OptiLight de Lumenis.'),
    item('Activa', 'dry-eye-activa', image.dryEye, 'Solution Activa dédiée au confort de l’œil sec.')
  ]}
];

const productHref = (category, sub) => `/produits?category=${encodeURIComponent(category)}${sub ? `&sub=${encodeURIComponent(sub)}` : ''}`;
const brandHref = (brand, category) => `/produits?${category ? `category=${encodeURIComponent(category)}&` : ''}brand=${encodeURIComponent(brand)}`;

megaMenu[1].href = productHref('Exploration & diagnostic');
megaMenu[2].href = productHref('Laser');
megaMenu[3].href = productHref('Chirurgie');
megaMenu[4].href = productHref('Chirurgie');
megaMenu[5].href = productHref('Microscopes opératoires');
megaMenu[6].href = productHref('Dry Eye');

Object.assign(megaMenu[0].items[1], { href: productHref('Chirurgie', 'Couteaux ophtalmiques') });
Object.assign(megaMenu[0].items[3], { href: productHref('Chirurgie', 'Rétracteurs à iris') });
Object.assign(megaMenu[0].items[4], { href: productHref('Chirurgie', 'Produits de contraste') });
Object.assign(megaMenu[0].items[5], { href: productHref('Chirurgie', 'Produits de tamponnement') });
Object.assign(megaMenu[1].items[0], { href: productHref('Exploration & diagnostic', 'OCT') });
Object.assign(megaMenu[1].items[1], { href: productHref('Exploration & diagnostic', 'Rétinographie & angiographie') });
Object.assign(megaMenu[1].items[3], { href: productHref('Exploration & diagnostic', 'Biométrie & échographie') });
Object.assign(megaMenu[2].items[0], { href: productHref('Laser', 'PPR') });
Object.assign(megaMenu[2].items[1], { href: productHref('Laser', 'YAG') });
Object.assign(megaMenu[3].items[0], { href: brandHref('Focus', 'Chirurgie') });
Object.assign(megaMenu[3].items[1], { href: brandHref('Appassamy') });
Object.assign(megaMenu[3].items[2], { href: brandHref('Geuder', 'Chirurgie') });
Object.assign(megaMenu[4].items[0], { href: brandHref('Rayner') });
Object.assign(megaMenu[4].items[1], { href: brandHref('Geuder', 'Chirurgie') });
megaMenu[5].items.forEach(entry => Object.assign(entry, { href: brandHref(entry.name) }));
Object.assign(megaMenu[6].items[0], { href: brandHref('SBM', 'Dry Eye') });
Object.assign(megaMenu[6].items[1], { href: brandHref('Lumenis', 'Dry Eye') });
Object.assign(megaMenu[6].items[2], { href: brandHref('SBM', 'Dry Eye') });

const specialPages = {
  'implants-intraoculaires': [
    item('Pliables', 'implants-pliables', image.implants, 'Implants pliables pour une implantation par micro-incision.'),
    item('PMMACP', 'implants-pmmacp', 'IMPLANTS/freedom/pmma-intraocular-lens.png', 'Implants PMMA de chambre postérieure.'),
    item('PMMACA', 'implants-pmmaca', image.iris, 'Implants PMMA de chambre antérieure.'),
    item('3 pièces', 'implants-3-pieces', 'IMPLANTS/FREEDOM 3 PIECES/FREEEDOM-SULCO-IOL-400x589.png', 'Implants intraoculaires à 3 pièces.')
  ],
  anneaux: [
    item('Anneaux de tension', 'anneaux-de-tension', image.rings, 'Anneaux de tension capsulaire.'),
    item('Segments d’anneaux', 'segments-danneaux', image.rings, 'Segments d’anneaux pour le soutien capsulaire localisé.')
  ],
  'unites-de-consultation': [
    item('Tables de consultation', 'tables-de-consultation', image.consultation, 'Tables et postes de consultation ophtalmologique.'),
    item('Lampes à fente', 'lampes-a-fente', image.consultation, 'Lampes à fente pour l’examen du segment antérieur.'),
    item('Réfractomètres', 'refractometres', 'EXPLORATION/REFRACTOMETRE/TOMEY/RC900/RC-900_floating.png', 'Réfractomètres et auto-réfractomètres.'),
    item('Tensiomètres', 'tensiometres', image.consultation, 'Tensiomètres pour la mesure de la pression intraoculaire.'),
    item('Boîtes à verres', 'boites-a-verres', image.consultation, 'Boîtes à verres d’essai pour la réfraction subjective.'),
    item('Lunettes d’essai', 'lunettes-dessai', image.consultation, 'Lunettes d’essai pour les examens de réfraction.')
  ],
  'champs-visuels': [
    item('Automatiques', 'champs-visuels-automatiques', image.fields, 'Périmètres automatiques pour l’exploration du champ visuel.'),
    item('OLdmar', 'champs-visuels-oldmar', image.fields, 'Solutions OLdmar pour l’exploration du champ visuel.')
  ]
};

specialPages['implants-intraoculaires'].forEach(entry => Object.assign(entry, { href: productHref('Implants intraoculaires') }));
specialPages.anneaux.forEach(entry => Object.assign(entry, { href: productHref('Chirurgie') }));
Object.assign(specialPages['unites-de-consultation'][0], { href: productHref('Exploration & diagnostic') });
Object.assign(specialPages['unites-de-consultation'][1], { href: productHref('Exploration & diagnostic', 'Lampes à fente') });
Object.assign(specialPages['unites-de-consultation'][2], { href: productHref('Exploration & diagnostic', 'Réfractomètres & kératomètres') });
specialPages['unites-de-consultation'].slice(3).forEach(entry => Object.assign(entry, { href: productHref('Exploration & diagnostic') }));
Object.assign(specialPages['champs-visuels'][0], { href: productHref('Exploration & diagnostic', 'Champs visuels automatisés') });
Object.assign(specialPages['champs-visuels'][1], { href: productHref('Exploration & diagnostic') });

const allItems = megaMenu.flatMap(section => section.items);
const sectionPages = megaMenu.map(section => ({ name: section.name, slug: section.slug, href: section.href, image: section.items[0].image, description: `Découvrez notre sélection ${section.name.toLowerCase()} pour les professionnels de l’ophtalmologie.`, items: section.items }));
export const catalogPages = [...sectionPages, ...allItems.map(page => ({ ...page, items: specialPages[page.slug] || [] })), ...Object.values(specialPages).flat().map(page => ({ ...page, items: [] }))];
export const getCatalogPage = slug => catalogPages.find(page => page.slug === slug);
