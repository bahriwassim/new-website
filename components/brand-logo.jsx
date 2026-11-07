const logos = {
  Rayner: 'logo-fabricant/RaynerLogo_Blk_500px_wide_cropped.png',
  Optopol: 'logo-fabricant/Optopol_logo-1024x222.webp',
  Tomey: 'logo-fabricant/6628f48e0df40de6128cf255_tomey_logo.jpg',
  Cristalens: 'logo-fabricant/LOGO_CRISTALENS_RVB.png',
  Geuder: 'logo-fabricant/megatron-s4-hps-microsurgical-system-geuder-label-text-logo-symbol-transparent-png-2980051.png',
  Optos: 'logo-fabricant/optos.jpg'
};

export function BrandLogo({ name }) {
  const image = logos[name];
  return <div className="brand-logo">{image ? <img src={`/media/${image.split('/').map(encodeURIComponent).join('/')}`} alt={`Logo ${name}`} /> : <span className="brand-monogram">{name.slice(0, 2).toUpperCase()}</span>}<strong>{name}</strong></div>;
}
