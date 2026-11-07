import { Reveal } from '../../components/reveal';
import { media } from '../../lib/catalog';

const team=[
  {name:'Amine Smaoui',role:'Directeur général',image:media('site-media/images/team-amine.jpg')},
  {name:'Eslem Zalila',role:'Directrice administrative',image:media('site-media/images/team-eslem.jpg')},
  {name:'Saifeddine Trabelsi',role:'Clinical Application Specialist',image:media('site-media/images/team-saifeddine.jpg')},
  {name:'Mestiri Malek',role:'Spécialiste Field Applications',image:media('site-media/images/team-mestiri.jpg')},
  {name:'Hmaidia Borhen',role:'Application Engineer',image:media('site-media/images/team-hmaidia.jpg')},
  {name:'Mdallah Ahmed',role:'Responsable Supply Chain & Affaires réglementaires',image:media('site-media/images/team-mdallah.jpg')},
  {name:'Issam Mrabet',role:'Commercial',image:media('site-media/images/team-issam.jpg')}
];

export default function Team(){return <><section className="page-hero team-hero"><p className="kicker red">Freedom Distribution</p><h1>Une équipe engagée<br/><em>à vos côtés.</em></h1><p>Une équipe pluridisciplinaire au service de l’ophtalmologie, de la précision clinique et de la performance technique.</p></section><section className="team-page"><Reveal><p className="kicker red">L’humain au cœur</p><h2>Expertise technique, proximité et accompagnement.</h2></Reveal><div className="team-grid">{team.map((member,index)=><Reveal key={member.name} delay={index*.06}><article className="team-card"><div className="team-photo"><img src={member.image} alt={`Portrait illustratif de ${member.name}`}/><span>0{index+1}</span></div><p>{member.role}</p><h3>{member.name}</h3><i>Portrait illustratif temporaire</i></article></Reveal>)}</div></section><section className="team-note"><Reveal><p className="kicker red">Notre promesse</p><h2>Une présence locale.<br/><em>Une expertise spécialisée.</em></h2></Reveal></section></>}
